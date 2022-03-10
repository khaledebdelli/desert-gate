import express from "express";
import * as dotenv from "dotenv";

dotenv.config();


// Constants
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || 'localhost';

const app = express();

app.get("/", (req, res) => {
  res.status(200).send('🏜️');
});

app.get("/api/environment", (req, res) => {
  res.status(200).send(`environment.${process.env.NODE_ENV}`);
});
app.get("/api/version", (req, res) => {
  res.status(200).send(`CIRCLE_SHA1=${process.env.CIRCLE_SHA1}_CIRCLE_BUILD_NUM=${process.env.CIRCLE_BUILD_NUM}`);
});
app.listen(PORT, HOST, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
