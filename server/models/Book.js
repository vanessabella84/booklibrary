const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    published_date: {
      type: Date
    },
    
    updated_date: {
      type: Date,
      default: Date.now
    },
    comment:{
      type: [String]
    }
  });
  
  module.exports = Book = mongoose.model('book', BookSchema);
