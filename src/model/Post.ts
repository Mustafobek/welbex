import database from '../database/sequelize'
import {DataTypes} from 'sequelize'

const Post = database.define('Post', {
    _id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    textContent: {
        type: DataTypes.STRING(2048),
        allowNull: false
    },
    mediaContent: {
        type: DataTypes.STRING,
    }
})

export default Post