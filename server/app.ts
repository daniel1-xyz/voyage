const express = require("express");
const path = require("path");

const { db } = require("./config/database.ts");

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err: Error) => console.log("error" + err));

const app = express();

app.use("/", (req: Request, res: Response) => {});

app.use("/points", require("./routes/points"));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
