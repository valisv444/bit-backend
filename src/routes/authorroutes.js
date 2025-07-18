const express = require('express');
const router = express.Router();
const {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require('../controller/authorcontroller');

router.post('/', createAuthor);         
router.get('/', getAuthors);            
router.get('/:id', getAuthorById);     
router.put('/:id', updateAuthor);      
router.delete('/:id', deleteAuthor);   

module.exports = router;
