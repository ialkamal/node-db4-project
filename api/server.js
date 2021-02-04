const express = require("express");
const recipesRouter = require("./recipes/recipes-router");
const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({ message: error.message, stack: error.stack });
});

module.exports = server;
