export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        },
    });

    User.associate = (db) => {
        User.hasOne(db.Tenant);
    };

    return User;
};
