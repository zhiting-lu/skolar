const passwordHash = require('password-hash');
const {adminEmail, adminPassword} = require("../config");

const initAdminUser = (Teacher) => {
  Teacher.count()
    .then((count) => {
      if (count === 0) {
        console.log('Going to create a first admin user')
        const admin = new Teacher({ name: 'Admin', email: adminEmail, sensitiveHashpass: passwordHash.generate(adminPassword)});
        admin.save();
      }
    })
}

module.exports = {
  initAdminUser,
}
