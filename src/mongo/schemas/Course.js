const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  code: String,
  active: Boolean,
  description: String,
});

const Course = mongoose.model('Course', schema);

module.exports = Course;
