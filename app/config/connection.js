//Dependencies
const Sequelize = require('sequelize');

//Creates connection to mysql using sequelize
//                               database, user, password(*CHANGE TO YOUR PASSWORD*)
const sequelize = new Sequelize ('wiki', 'root', 'abc123', {
    host: 'localhost',
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

//Exports the connection for use in other files
module.exports = sequelize;