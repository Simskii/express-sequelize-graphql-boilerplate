import Sequelize from 'sequelize';
import CONFIG from '../config/config';

const sequelize = new Sequelize(`${CONFIG.SQL_URL}`, {
    dialect: 'postgres',
    define: {
        freezeTableName: true,
    },
});

const db = {
    User: sequelize.import('./user'),
    Tenant: sequelize.import('./tenant'),

};

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
