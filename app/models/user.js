//Dependencies
//Upper case Sequelize references standard library
// const Sequelize = require('sequelize');
//lower case sequelize references the connection to the DB
// const sequelize = require('../config/connection');

//creates user table table

// const user = sequelize.define('user', 
//     {
//         id: {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         user_name: user_name.STRING,
//         user_icon: user_name.STRING,
//         email: email.STRING,
//         password: password.STRING,
//         contribution: contribution.STRING
//     },
//     {
        // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
//         freezeTableName: true
//     }
// );


//syncs with DB
// user.sync();

//allows use of comments in other files.
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_name: DataTypes.STRING,
        user_icon: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        contribution: DataTypes.STRING
    },
    {
        // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
        freezeTableName: true
    }
);
    return user;
};