
//allows use of the comments model in other files.
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define(
    "comments",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING
      },
      comment: {
        type: DataTypes.STRING
      },
      article_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      // Disable the modification of tablenames; By default, sequelize will automatically transform all passed model names (first parameter of define) into plural.
      freezeTableName: true,
    }
  );
  
  return comments;
};
