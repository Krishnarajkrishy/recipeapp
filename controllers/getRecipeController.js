const RecipesModel = require('../model/RecipesModel');

const getRouter = require('express').Router();


getRouter.get('/allrecipes', async (request, response) => {
    try {
        const recipes = await RecipesModel.find();
        if (recipes) {
            return response.status(200).json({
                message: 'data recive succfully',
                data: recipes
            })
        } else {
            return response.status(400).json({
                message: 'something went wrong'
            })
        }
    } catch (err) {
        return response.status(500).json({
            message: err.message
        })
    }
});

getRouter.get("/getone/:id", async (request, response) => {
  try {
    const recipe = await RecipesModel.findById(request.params.id);
    if (!recipe) {
      return response.status(404).json({
        message: "recipe is not found",
      });
    } else {
      return response.status(200).json({
          message: "data retrive successfully",
          data: recipe
      });
    }
  } catch (err) {
    return response.status(500).json({
      message: err.message,
    });
  }
});



module.exports = getRouter;