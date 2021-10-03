const validator = require('validator')

const User = (sequelize, Sequelize) => {
  const userSchema = sequelize.define("users", {
    'email': {
      'type': Sequelize.STRING,
      'unique': true,
      //'allowNull': false,
      set: function (val) {
        this.setDataValue('email', val.trim().toLowerCase())
      },
      validate: {
        isEmail: true
      }
    },
    'phone': {
      'type': Sequelize.STRING,
      set: function (val) {
        this.setDataValue('phone', val.trim())
      },
      validate: {
        isPhone: function (val) {
          if (!validator.isMobilePhone(val, 'vi-VN')) {
            throw new Error('Số điện thoại không hợp lệ (10 số, không chứa kí tự)')
          }
        }
      }

    },
    'firstname': {
      'type': Sequelize.STRING,
      set: function (val) {
        this.setDataValue('firstname', val.trim())
      }
    },
    'lastname': {
      'type': Sequelize.STRING,
      set: function (val) {
        this.setDataValue('lastname', val.trim())
      }

    },
    'dob' : {
      'type': Sequelize.STRING,
       set: function (val) {
        this.setDataValue('dob', val.trim())
      }
    },
    'password': {
      'type': Sequelize.STRING,
      set: function (val) {
        this.setDataValue('password', val.trim())
      },
      validate : {
        len: [7,100]
      }
    },
    'otp' : {
      'type': Sequelize.STRING,
    },
    'type_account' : {
      'type' : Sequelize.INTEGER,
      'defaultValue' : 0  // 0 is regular account | 1 is admin account
    },
    'active' : {
      'type' : Sequelize.BOOLEAN,
      'defaultValue' : true // true is active | false is deactivate
    }
  });
  return userSchema
}





module.exports = User;