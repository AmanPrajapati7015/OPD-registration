
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://opdadmin:gdsc@opd-registration.eyieb.mongodb.net/OPD-staff")
   /**
    mongodb+srv://opdadmin:gdsc@opd-registration.eyieb.mongodb.net/
    */
const AdminSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    hospitalname: String,
    }); 

const Admin = mongoose.model('Admin', AdminSchema);

const HODSchema = new mongoose.Schema({
    AdminId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'Admin',
       /* required: true*/
    },
    username: String,
    email: String,
    password: String,
    department : String,
    room_no : Number,
    availability :{
        type : Boolean,
        default : true
    }
});

const HOD = mongoose.model('HOD', HODSchema);

const firstAdmin = {
    _id : "12345",
    username: "firstadmin",
    email: "firstadmin@gmail.com",
    password: "First@123",
    hospitalname: "DTU_Clinic",
}

module.exports = {	HOD , Admin ,firstAdmin }