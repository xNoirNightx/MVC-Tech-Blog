const { Sequelize } = require('sequelize');

// import from config here
const { development } = require('./config/config.json');

// sequelize configuration
const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
);

module.exports = sequelize;