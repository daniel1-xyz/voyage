import { Sequelize } from "sequelize";

export const db = new Sequelize({
  dialect: "postgres",
  database: "postgres",
  username: "postgres",
  password: "Aa123456",
  host: "localhost",
  port: 5432,
  logging: false,
});
