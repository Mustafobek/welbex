import {Sequelize} from "sequelize";
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from "../constant";

export default new Sequelize({
    host: DB_HOST,
    database: DB_NAME,
    username: DB_USERNAME,
    port: DB_PORT,
    dialect: 'postgres',
    password: DB_PASSWORD
})