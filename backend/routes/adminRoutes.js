const express = require('express');
const router = express.Router();
const zod = require("zod");
const { HOD } = require('../db');



router.post('/add', async (req, res) => {
  
  try {
    const findHOD = await HOD.findOne({
      email: req.body.email
    })

    if (findHOD == null) {
      const createdHOD = await HOD.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        department: req.body.department,
        room_no: req.body.room_no,
        availability: req.body.availability
      })
      res.status(200).json({
        message: "HOD added successfully",
        HODid: createdHOD._id
      })
    }
    else {
      res.json({
        msg: "Have a HOD with same mail"
      })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error while Adding HOD', error });
  }

});


router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the item by ID
    const deletedItem = await HOD.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'HOD not found' });
    }

    res.status(200).json({ message: 'HOD removed successfully', deletedItem });
  } catch (error) {
    res.status(500).json({ message: 'Error while removing HOD', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const HODs = await HOD.find({}, 'username department')
    res.status(200).json(HODs);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details', error });
  }
});

module.exports = router;
