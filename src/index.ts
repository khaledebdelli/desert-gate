import express from "express";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.get("/check", (req, res) => {
  res.status(200).send("Hello World");
});
app.listen(PORT, HOST, () => {
  console.log(`Server running on  ${HOST}:${PORT}`);
});
