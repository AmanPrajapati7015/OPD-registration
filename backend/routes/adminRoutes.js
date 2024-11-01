const express = require('express');
const router = express.Router();

// Route to handle GET requests to /admin
router.get('/', (req, res) => {
  res.send('Welcome to the admin dashboard');
});

// Route to handle GET requests to /admin/settings
router.get('/settings', (req, res) => {
  res.send('Admin settings page');
});

// Route to handle POST requests to /admin/create
router.post('/create', (req, res) => {
  const newAdminData = req.body;
  // Handle admin creation logic here
  res.send(`Admin created with data: ${JSON.stringify(newAdminData)}`);
});

// Export the router
module.exports = router;
