const express = require('express');
const { createDbConnection } = require('./RecipeDB');
const createRouter = require('./controllers/createRecipeController');
const getRouter = require('./controllers/getRecipeController');
const updateRouter = require('./controllers/updateRecipeController');
const deleteRouter = require('./controllers/deleteRecipeController');
require('dotenv').config();

const app = express();

app.use(express.json());

createDbConnection();


app.use('/create', createRouter);
app.use('/get', getRouter);
app.use('/update', updateRouter)
app.use('/delete', deleteRouter)

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log('server is started')
    console.log(`http://${process.env.PORT}:${process.env.HOSTNAME}`)
});