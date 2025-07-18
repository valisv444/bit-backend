const express = require('express');
const router = express.Router();
const {
  getAllFavorites,
  createFavorite,
  getFavoriteById,
  updateFavorite,
  deleteFavorite
} = require('../controller/favoritecontroller');

router.get('/', getAllFavorites);
router.post('/', createFavorite);
router.get('/:id', getFavoriteById);
router.put('/:id', updateFavorite);
router.delete('/:id', deleteFavorite);

module.exports = router;

