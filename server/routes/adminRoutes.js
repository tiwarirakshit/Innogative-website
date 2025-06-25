// routes/adminRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin'); // adjust path if needed

const router = express.Router();

// POST /api/admin-login
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  return res.json({ success: true, message: 'Login successful' });
});

module.exports = router;
