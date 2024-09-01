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
db.Users = require('./user.model.js')(sequelize, Sequelize);
db.UserPreferences = require('./user.preferences.model.js')(sequelize, Sequelize);
db.Verification = require('./verification.model.js')(sequelize, Sequelize);
db.System = require('./system.model.js')(sequelize, Sequelize);
db.Addresses = require('./address.model.js')(sequelize, Sequelize);
db.OrderReceivers = require('./order.receiver.model.js')(sequelize, Sequelize);
db.Orders = require('./order.model.js')(sequelize, Sequelize);
db.Fields = require('./field.model.js')(sequelize, Sequelize);
db.FieldParcelDatas = require('./field.parcel.data.model.js')(sequelize, Sequelize);
db.FieldPreferences = require('./field.preferences.model.js')(sequelize, Sequelize);
db.CorpMetas = require('./corp.meta.model.js')(sequelize, Sequelize);
db.SensorDatas = require('./sensor.data.model.js')(sequelize, Sequelize);
db.CorpHints = require('./corp.hint.model.js')(sequelize, Sequelize);
db.CorpMissions = require('./corp.mission.model.js')(sequelize, Sequelize);
db.CorpAnalysis = require('./corp.analysis.model.js')(sequelize, Sequelize);
db.CorpCosts = require('corp.cost.model.js')(sequelize, Sequelize);

// Associations

module.exports = db;