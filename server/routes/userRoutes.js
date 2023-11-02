const express = require('express');
const router = express.Router();

// import Book model
const User = require('../models/User');

// @route GET api/User/test
// @description tests User route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/
// @description Get all user
// @access Public
router.get('/', (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) =>
            res.status(404).json({ nobooksfound: 'No user found' })
        );
});

// @route GET api/:id
// @description Get single user by id
// @access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(404).json({ nobookfound: 'No user found' }));
});


// @route POST api/
// @description add/save user
// @access Public
router.post('/new-user', (req, res) => {
    User.create(req.body)
        .then((users) => res.json({ msg: 'user added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this user' })
        );
});

// @route PUT api/:id
// @description Update user
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such book' }));
  });

  module.exports = router;