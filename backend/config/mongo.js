const mongoose = require('mongoose');
require('dotenv').config()

// mongoose.Promise = global.Promise;

//mongo connection string to azure cosmos db
const mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}.mongo.cosmos.azure.com:${process.env.DB_PORT}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${process.env.DB_HOST}@`;

//connection function
function connect() {
    return mongoose.connect(mongoUri);
}

module.exports = {
    connect,
    mongoose,
};