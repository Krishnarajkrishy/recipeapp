const mongoose = require('mongoose');


const recipesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    instruction: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


const RecipesModel = mongoose.model('recipes', recipesSchema);

module.exports = RecipesModel; 