require('dotenv/config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8',
    },

    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },

    logging: false
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Include db tables
db.User = require('./user.model.js')(sequelize, Sequelize);
db.UserPreferences = require('./user.preferences.model.js')(sequelize, Sequelize);

// Associations

module.exports = db;