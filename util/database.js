const Sequelize = require('sequelize')
const sequelize = new Sequelize('node-complete', 'root', 'rootPass#', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize