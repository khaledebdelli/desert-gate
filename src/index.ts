import express from "express";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get("/check/health", (req, res) => {
  res.status(200).send("Hello World");
});
app.get("/check/version", (req, res) => {
  res.status(200).send(`"Hello World!.*${process.env.CIRCLE_SHA1}_${process.env.CIRCLE_BUILD_NUM}"`);
});
app.listen(PORT, HOST, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
