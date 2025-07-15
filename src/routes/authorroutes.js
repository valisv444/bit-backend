const express = require('express');
const router = express.Router();
const {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require('../controller/authorcontroller');

router.post('/authors', createAuthor);         
router.get('/authors', getAuthors);            
router.get('/authors/:id', getAuthorById);     
router.put('/authors/:id', updateAuthor);      
router.delete('/authors/:id', deleteAuthor);   

module.exports = router;
