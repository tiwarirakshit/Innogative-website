const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  type: [String],
  description: String,
  imageUrl: String,
  images: [String],
  videoUrl: String,
  client: String,
  date: String
});

module.exports = mongoose.model('Project', ProjectSchema);
