const express = require('express');
const router = express.Router();
const {
  createSuggestion,
  getSuggestions,
  getSuggestionById,
  updateSuggestion,
  deleteSuggestion
} = require('../controller/suggestioncontroller');

router.post('/suggestions', createSuggestion);

router.get('/suggestions', getSuggestions);

router.get('/suggestions/:id', getSuggestionById);

router.put('/suggestions/:id', updateSuggestion);

router.delete('/suggestions/:id', deleteSuggestion);

module.exports = router;
