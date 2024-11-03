require('dotenv').config()
const mongoose = require('mongoose');

function connectTodB(){
    mongoose.connect(process.env.MONGO_URI ).then(()=>{
        console.log("Connect to database")
    })
 
}
module.exports= connectTodB