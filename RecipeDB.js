const mongoose = require('mongoose')

const DB_URI = "mongodb://localhost:27017/recipes";


async function createDbConnection() {
    try {
        await mongoose.connect(DB_URI)
        console.log('DB connection established')
     } catch(error) {
        console.log(error)
    }
}


module.exports = {
    createDbConnection
}