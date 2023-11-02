const express = require('express');
const router = express.Router();

// import Book model
const Book = require('../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/
// @description Get all books
// @access Public
router.get('/search-all/:all', (req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) =>
            res.status(404).json({ nobooksfound: 'No Books found' })
        );
});

// @route GET api/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
});
// @route GET api/:title
// @description Get single book by title
// @access Public
router.get('/search-title/:title', (req, res) => {
    Book.find({title: req.params.title})
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
});
// @route GET api/:author
// @description Get single book by author
// @access Public
router.get('/search-author/:author', (req, res) => {
    Book.find({author: req.params.author})
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
});
// @route POST api/
// @description add/save book
// @access Public
router.post('/new-book', (req, res) => {
    Book.create(req.body)
        .then((book) => res.json({ msg: 'Book added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this book' })
        );
});

// @route PUT api/:id
// @description Update book
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
