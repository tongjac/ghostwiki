
// FIGURE OUT HOW TO DO FOREIGN KEYS

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
      created_at: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updated_at: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
      user_id:{
        type: DataTypes.INTEGER,
        defaultValue: 1
      } ,
      user_name: {
        type: DataTypes.STRING,
        defaultValue: "3rd_eye_llama"
      },
      comment: {
        type: DataTypes.STRING
      },
    },
    {
      // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
      freezeTableName: true,

    }
  );
  return comments;
};
