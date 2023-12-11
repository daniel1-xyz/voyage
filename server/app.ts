import express from "express";
import router from "./routes/points";

const app = express();

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
