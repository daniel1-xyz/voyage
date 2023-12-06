const express = require("express");
const path = require("path");

const db = require("./config/database.ts");

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("error" + err));

const app = express();

app.get("/", (req, res) => {});

const PORT = process.env.PORT;

app.listen(PORT);
