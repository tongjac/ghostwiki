//Dependencies
//Upper case Sequelize references standard library
// const Sequelize = require('sequelize');
//lower case sequelize references the connection to the DB
// const sequelize = require('../config/connection');

//creates comments table

// const comments = sequelize.define('comments', 
//     {
//         id: {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true
//         },
//         date_posted: date_posted.DATE,
//         user_id: user_id.INTEGER,
//         user_name: user_name.STRING,
//         comment: comment.STRING
//     },
//     {
        // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
//         freezeTableName: true
//     }
// );

//syncs with DB
// comments.sync();

//allows use of comments in other files.
module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define('comments', 
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date_posted: DataTypes.DATE,
        user_id: DataTypes.INTEGER,
        user_name: DataTypes.STRING,
        comment: DataTypes.STRING
    },
    {
        // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
        freezeTableName: true
    }
);
    return comments;
};