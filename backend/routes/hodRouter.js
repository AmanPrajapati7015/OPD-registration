const express = require('express')
const router=express.Router()
const doctorModel = require('../models/doctor.model') 




router.get('/doctor-data',async (req,res)=>{
    const doctors= await doctorModel.find()
    res.json(doctors)
})

router.post('/form-data', async (req,res)=>{
    try {
        const formData = new doctorModel(req.body); // Create a new document
        await formData.save(); // Save to MongoDB
        res.status(200).json({ message: "Form data saved successfully!" });
      } catch (error) {
        console.error("Error saving form data:", error);
        res.status(500).json({ error: "Failed to save form data." });
      }
   
})


module.exports= router