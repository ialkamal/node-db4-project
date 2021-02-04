const express = require("express");
const Recipes = require("./recipes-model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).send(recipes);
    })
    .catch((err) => {
      err.message = "Server failed getting the recipes.";
      err.statusCode = 500;
      next(err);
    });
});

router.get("/:id", checkID, (req, res) => {
  const recipe = req.recipe;
  res.status(200).send(recipe);
});

router.get("/:id/instructions", checkID, (req, res) => {
  const { id } = req.params;
  const recipe = req.recipe;
  Recipes.getInstructions(id)
    .then((instructions) => {
      res.status(200).json({ recipe, instructions });
    })
    .catch((err) => {
      err.message = "Server failed getting the recipes.";
      err.statusCode = 500;
      next(err);
    });
});

router.get("/:id/shoppinglist", checkID, (req, res) => {
  const { id } = req.params;
  const recipe = req.recipe;
  Recipes.getShoppingList(id)
    .then((shoppingList) => {
      res.status(200).json({ recipe, shoppingList });
    })
    .catch((err) => {
      err.message = "Server failed getting the recipes.";
      err.statusCode = 500;
      next(err);
    });
});

function checkID(req, res, next) {
  const { id } = req.params;
  Recipes.getRecipe(id)
    .then((recipe) => {
      if (!recipe) {
        err.message = "Recipe not found";
        err.statusCode = 404;
        next(err);
      } else {
        req.recipe = recipe;
        next();
      }
    })
    .catch((err) => {
      err.message = "Server failed getting the recipe.";
      err.statusCode = 500;
      next(err);
    });
}

module.exports = router;
