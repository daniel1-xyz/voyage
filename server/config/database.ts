import { Sequelize } from "sequelize";

// TEST, FIX LATER
const db = new Sequelize("postgres", "postgres", "Aa123456", {
  host: "localhost",
  dialect: "postgres",
});

export { db };
