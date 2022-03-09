import express from "express";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/.env' });


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get("/api/env", (req, res) => {
  res.status(200).send("environment.*${process.env.NODE_ENV}");
});
app.get("/api/version", (req, res) => {
  res.status(200).send(`CIRCLE_SHA1=${process.env.CIRCLE_SHA1}_CIRCLE_BUILD_NUM=${process.env.CIRCLE_BUILD_NUM}`);
});
app.listen(PORT, HOST, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
