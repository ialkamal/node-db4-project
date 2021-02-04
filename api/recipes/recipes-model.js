const db = require("../../data/db-config");

function getRecipes() {
  return db("recipes");
}

async function getRecipe(id) {
  const [recipe] = await db("recipes").where({ id });
  return recipe;
}

function getShoppingList(recipe_id) {
  return db
    .select("i.name", "ri.quantity")
    .where({ recipe_id })
    .from("recipes-ingredients as ri")
    .join("ingredients as i", "i.id", "=", "ri.ingredient_id");
}

function getInstructions(recipe_id) {
  return db("instructions").where({ recipe_id });
}

module.exports = { getRecipes, getRecipe, getInstructions, getShoppingList };
