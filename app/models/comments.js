
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
      // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
      freezeTableName: true,

    }
  );
  // Uses Sequelize to automatically create association between tables
  // comments.associate = (models) => {
  //   comments.belongsTo(models.articles, {
  //     foreignKey: {allowNull:false},
  //     onDelete: "cascade"
  //   })
  // }
  return comments;
};
