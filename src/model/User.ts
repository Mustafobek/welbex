import database from '../database/sequelize'
import {DataTypes} from "sequelize";
import Post from "./Post";

const User = database.define('User', {
    _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Post)
Post.belongsTo(User)

export default User