export default (sequelize, DataTypes) => {
    const Tenant = sequelize.define('Tenant', {
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    Tenant.associate = (db) => {
        Tenant.hasMany(db.User);
    };

    return Tenant;
};
