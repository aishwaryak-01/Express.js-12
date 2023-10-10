const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = sequelize.define('user', {
id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    phonenumber: Sequelize.STRING
});
module.exports = User;
