const express = require('express');
const router = express.Router();
const {
  createSuggestion,
  getSuggestions,
  getSuggestionById,
  updateSuggestion,
  deleteSuggestion
} = require('../controller/suggestioncontroller');


router.post('/', createSuggestion);
router.get('/', getSuggestions);
router.get('/:id', getSuggestionById);
router.put('/:id', updateSuggestion);
router.delete('/:id', deleteSuggestion);

module.exports = router;
