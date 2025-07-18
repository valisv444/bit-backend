const Favorite = require('../models/favorite');

const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFavorite = async (req, res) => {
  try {
    const newFavorite = new Favorite(req.body);
    await newFavorite.save();
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getFavoriteById = async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) return res.status(404).json({ message: 'No encontrado' });
    res.json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFavorite = async (req, res) => {
  try {
    const updatedFavorite = await Favorite.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedFavorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: 'Favorito eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFavorites,
  createFavorite,
  getFavoriteById,
  updateFavorite,
  deleteFavorite
};
