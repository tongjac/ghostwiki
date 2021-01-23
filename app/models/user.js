//allows use of comments in other files.
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', 
    {
        id: {
            type: DataTypes.INTEGER,
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