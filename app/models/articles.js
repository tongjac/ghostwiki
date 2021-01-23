//Makes articles model available to other files. Also creates articles table.
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      id: {
        type: DataTypes.INTEGER,
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

