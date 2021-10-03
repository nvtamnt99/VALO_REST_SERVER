const db = require("../models/connect")
const User = db.User
const bcrypt = require('bcrypt');
const user = require("../routes/user");


exports.signup = (async (req, res) => {
  const { email, phone, firstname, lastname, dob, password, type_account, active } = req.body;
  let userFindEmail = await User.findOne({ where: { email } });
  let userFindPhone = await User.findOne({ where: { phone } });

  if (userFindEmail !== null && userFindPhone !== null) {
    return res.status(500).send({ 'error': 'User exists' })
  }

  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      email: email,
      phone: phone,
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      password: hash
    });
    res.status(200).json('Register success')
  });
});



exports.loginEmail = (async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (!user) res.status(200).json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.status(200).json({ error: "Wrong Username And Password Combination" });

    res.status(200).json("You have logged in Valo with Email!!!");
  });
});

exports.loginPhone = (async (req, res) => {
  const { phone, password } = req.body;

  const user = await User.findOne({ where: { phone: phone } });

  if (!user) res.status(200).json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.status(200).json({ error: "Wrong Username And Password Combination" });

    res.status(200).json("You have logged in Valo with phone number!!!");
  });
})

