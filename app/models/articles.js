//Dependencies
//Upper case Sequelize references standard library
// const Sequelize = require('sequelize');
//lower case sequelize references the connection to the DB
// const sequelize = require('../config/connection');

// Creates a articles model that matches up with DB
// const articles = sequelize.define(
//   "articles",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     title: title.STRING,
//     date_revised: title.DATE,
//     cat1: cat1.STRING,
//     cat1Content: cat1Content.STRING,
//     cat2: cat2.STRING,
//     cat2Content: cat2Content.STRING,
//     cat3: cat3.STRING,
//     cat3Content: cat3Content.STRING,
//     cat4: cat4.STRING,
//     cat4Content: cat4Content.STRING,
//     tags: tags.STRING,
//   },
//   {
    // Disable the modification of tablenames; By default, sequelize will automatically
    // Transform all passed model names (first parameter of define) into plural. If not set:
//     freezeTableName: true,
//   }
// );

//syncs with DB
// articles.sync();

//Makes articles model available to other files. Also creates articles table.
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      date_revised: DataTypes.DATE,
      cat1: DataTypes.STRING,
      cat1Content: DataTypes.STRING,
      cat2: DataTypes.STRING,
      cat2Content: DataTypes.STRING,
      cat3: DataTypes.STRING,
      cat3Content: DataTypes.STRING,
      cat4: DataTypes.STRING,
      cat4Content: DataTypes.STRING,
      tags: DataTypes.STRING,
    },
    {
      // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
      freezeTableName: true,
    }
  );
  return articles;
};

