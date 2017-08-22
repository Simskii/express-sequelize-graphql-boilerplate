export default (sequelize, DataTypes) => {
    const Tenant = sequelize.define('User', {
        name: {
            type: DataTypes.STRING
        }
    });

    Tenant.associate = (db) => {
        Tenant.hasMany(db.User);
    };

    return User;
};
