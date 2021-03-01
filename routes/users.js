const express = require('express');
const router = express.Router();
let User = require('../models/User');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sign-up').post((req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user.save()
    .then(user => res.json('User created: ' + user))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;