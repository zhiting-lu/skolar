const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
  course: String,
});

schema.pre('save', function(next) {
  if (this.name !== undefined && this.surname !== undefined) {
    this.fullName = this.name + " " + this.surname;
  }
  next();
});

const Student = mongoose.model('Student', schema);

module.exports = Student;