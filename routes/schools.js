const express = require('express');
const router = express.Router();
let School = require('../models/School');

router.route('/').get((req, res) => {
  School.find()
    .then(schools => res.json(schools))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sign-up').post((req, res) => {
  const school = new School({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    admission: req.body.admission,
    image: req.body.image
  });

  school.save()
    .then(school => res.json('School created: ' + school))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;