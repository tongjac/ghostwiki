//allows use of the user model in other files.
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_name: DataTypes.STRING,
        user_icon: {
            type: DataTypes.STRING,
            defaultValue: "https://placekitten.com/g/200/200/?"
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        contribution: DataTypes.STRING
    },
    {
        // Disable the modification of tablenames; By default, sequelize will automatically transform all passed model names (first parameter of define) into plural.
        freezeTableName: true
    }
);
    return user;
};