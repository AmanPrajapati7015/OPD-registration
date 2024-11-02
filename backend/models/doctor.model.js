const mongoose= require('mongoose')

const doctorSchema=new mongoose.Schema({
    name:String,
    roomNumber: Number,
    available:String,
    speciality : String,
    experience:Number,
    contact : Number,

})

const doctors= mongoose.model('doctors',doctorSchema)

module.exports=doctors