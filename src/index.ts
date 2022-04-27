import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'
import {join} from 'path'
import hbs from 'hbs'

import database from './database/sequelize'
import {SERVER_PORT} from "./constant";
import logger from "./utils/logger";
import userRouter from './router/auth'
import postRouter from './router/post'
import pagesRouter from './router/pages'

// application
const app = express()

// swagger documentation
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: 'Welbex-task',
            version: '1.0.0',
            description: 'Welbex test app with express!'
        },
        servers: [{
            url: 'http://localhost:3000'
        }, {
            url: "https://blog-test-task-999.herokuapp.com"
        }],
    },
    apis: ["./src/documentation/*.ts"]
}

const spec = swaggerJSDoc(options)

// app middleware setups
app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(express.static(join(__dirname, '../assets')))
app.set('views', join(__dirname, '../views'))
app.set('view engine', 'hbs')
hbs.registerPartials(join(__dirname, '../views/partials'))

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/post', postRouter)
app.use('/api/documentation', swaggerUI.serve, swaggerUI.setup(spec))
app.use('/', pagesRouter)


async function boot() {
    await database.authenticate()
    await database.sync()

    app.listen(SERVER_PORT, () => logger.info(`Server is on port: ${SERVER_PORT}`))
}

boot().then()