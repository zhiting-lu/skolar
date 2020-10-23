const mongoose = require('mongoose');
require('./connection');
const Teacher = require('./schemas/Teacher');
const Course = require('./schemas/Course');
const {initAdminUser} = require('./initAdminUser');


initAdminUser(Teacher);

module.exports = {
  Teacher,
  Course,
}
