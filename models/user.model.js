const User = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
        'email': {
            'type': Sequelize.STRING,
            'unique': true,
            'allowNull': false,
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
        'password': {
            'type': Sequelize.STRING,
            set: function (val) {
                this.setDataValue('password', val.trim())
            },
            validate: {
                len: [7, 100]
            }
        }
        
    });
    return users;
}

module.exports = User;