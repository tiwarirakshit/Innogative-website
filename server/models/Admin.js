// models/Admin.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String, // this will store the hashed password
});

module.exports = mongoose.model('Admin', AdminSchema);
