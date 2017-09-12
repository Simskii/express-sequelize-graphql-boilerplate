import config from '../config/config';
import bcrypt, { hashSync, genSaltSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
        },

    });

    User.associate = (db) => {
        User.belongsTo(db.Tenant);
    };

    User.prototype.authenticateUser = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.prototype.createToken = function () {
        return jwt.sign({
            _id: this._id,
            firstname: this.firstname,
            lastname: this.lastname,
            tenant: this.tenant,
            role: this.role,
        },
        config.JWT_SECRET,
        { expiresIn: '7d' }
        );
    };

    return User;
};
