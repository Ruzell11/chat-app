require('dotenv').config();

const mongoose = require('mongoose');

const uri = process.env.MONGDB_URI;

const connectToDatabase = async() => {
    return mongoose.connect(uri)
.then(() => console.log("SUCCESSFULLY CONNECTED TO DATABASE"))
.catch((error) => console.log(`SOMETHING WENT WRONG ON MONGODB ${error.message}`))

}


module.exports = connectToDatabase