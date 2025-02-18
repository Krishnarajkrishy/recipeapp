const RecipesModel = require('../model/RecipesModel');

const updateRouter = require('express').Router();


updateRouter.put('/update/:id',async (request, response) => {
    try {
        const recipe = await RecipesModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!recipe) {
            return response.status(404).json({
                message: 'Recipe is not found'
            })
        } else {
            return response.status(200).json({
                message: 'update is successfully',
                data : recipe
            })
        }
    } catch (error) {
        return response.status(400).json({
            error: error.message
        })
    }
})



module.exports = updateRouter;