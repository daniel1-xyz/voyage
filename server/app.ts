import express from "express";
import { db } from "./config/database";
import router from "./routes/points";

db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err: Error) => console.log("error" + err));

const app = express();

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
