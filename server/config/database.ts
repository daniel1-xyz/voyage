const { Sequelize } = require("sequelize");

// TEST, FIX LATER
const sequelize = new Sequelize("postgres", "postgres", "Aa123456", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
