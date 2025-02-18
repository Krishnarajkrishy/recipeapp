const RecipesModel = require('../model/RecipesModel');


const deleteRouter = require('express').Router();


deleteRouter.delete('/delete/:id', async (request, response) => {
    try {
        const recipe = await RecipesModel.findByIdAndDelete(request.params.id)
        if (!recipe) {
            return response.status(404).json({
                message: 'Recipe is not found'
            })
        } else {
            return response.status(200).json({
                message: 'Recipe deleted successfully'
            })
        }

    } catch (error) {
        return response.status(400).json({
            message:'something went wrong',
            error: error.message
        })
        
    }
});



module.exports = deleteRouter;