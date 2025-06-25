const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json({ projects });
});

// POST new
router.post('/', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json({ message: 'Project added' });
});

// PUT update
router.put('/:id', async (req, res) => {
  await Project.findOneAndUpdate({ id: req.params.id }, req.body);
  res.json({ message: 'Project updated' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Project.findOneAndDelete({ id: req.params.id });
  res.json({ message: 'Project deleted' });
});

module.exports = router;
