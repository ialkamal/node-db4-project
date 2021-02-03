const db = require("../../data/db-config");

function getRecipes() {
  return Promise.resolve("future recipes function");
}

function getShoppingList(recipe_id) {
  return Promise.resolve("future shopping list function");
}

function getInstructions(recipe_id) {
  return Promise.resolve("future instructions function");
}

module.exports = { getRecipes, getInstructions, getShoppingList };
