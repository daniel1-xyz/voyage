const { Sequelize } = require("sequelize");

// TEST, FIX LATER
module.exports = new Sequelize("postgres", "postgres", "Aa123456", {
  host: "localhost",
  dialect: "postgres",
});
