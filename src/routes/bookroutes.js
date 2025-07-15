const express = require('express');
const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controller/bookcontroller');

router.post('/books', createBook);        
router.get('/books', getBooks);           
router.get('/books/:id', getBookById);    
router.put('/books/:id', updateBook);     
router.delete('/books/:id', deleteBook);  

module.exports = router;

