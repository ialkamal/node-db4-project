const express = require("express");
const Recipes = require("./recipes-model");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Recipes Page!" });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Recipe ${id}` });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Instructions for Recipe ${id}` });
});

router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Shopping List for Recipe ${id}` });
});

module.exports = router;
