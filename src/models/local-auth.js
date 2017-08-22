import bcrypt, { hashSync, genSaltSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import config from '../config/config';
import db from '../models';

export default (sequelize, DataTypes) => {
    const LocalAuth = sequelize.define('LocalAuth', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    LocalAuth.associate = (models) => {
        LocalAuth.belongsTo(models.User);
    };

    LocalAuth.beforeCreate((user, options) => {
        user.password = user._hashPassword(user.password)
    });

    LocalAuth.prototype.authenticate = function (password) {
        return bcrypt.compareSync(password, this.password);
    }

    LocalAuth.prototype.createToken = async function () {
        const user = await db.User.findOne({ where: { id: this.UserId } });
        return jwt.sign({
            id: user.id,
            firstname: user.firstname
        }, config.JWT_SECRET)
    }

    LocalAuth.prototype._hashPassword = function (password) {
        return hashSync(password, genSaltSync(10));
    }

    return LocalAuth;
};
