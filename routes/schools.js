const express = require('express');
const router = express.Router();
let School = require('../models/School');

router.route('/').get((req, res) => {
  School.find()
    .then(schools => res.json(schools))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  School.findById(req.params.id)
    .then(school => res.json(school))
    .catch(err => res.status(400).json(err));
})

router.route('/add').post((req, res) => {
  const school = new School({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    admission: req.body.admission,
    image: req.body.image
  });

  school.save()
    .then(school => res.json(school))
    .catch(err => res.status(400).json(err));
});

router.route('/update/:id').post((req, res) => {
  School.findById(req.params.id)
    .then(school => {
      school.name = req.body.name;
      school.description = req.body.description;
      school.location = req.body.location;
      school.admission = req.body.admission;
      school.image = req.body.image;

      school.save()
        .then(school => res.json(school))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
})

module.exports = router;