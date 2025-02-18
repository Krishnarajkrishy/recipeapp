const RecipesModel = require('../model/RecipesModel');

const createRouter = require('express').Router();


createRouter.post('/create', async (request, response) => {
    try {
        const recipe = new RecipesModel(request.body)
        const result = await recipe.save();
        if (result) {
            return response.status(200).json({
                message: "Recipe is created successfully"
            })
        } else {
            return response.status(400).json({
                message: "something went wrong"
            })
        }
    } catch (error) {
        return response.status(400).json({
            message: error.message
        })
    }
});

module.exports = createRouter;