const Suggestion = require('../models/suggestion');

const createSuggestion = async (req, res) => {
  try {
    const newSuggestion = new Suggestion(req.body);
    const savedSuggestion = await newSuggestion.save();
    res.status(201).json({
      message: '¡Gracias por tu sugerencia!',
      data: savedSuggestion
    });
  } catch (err) {
    res.status(400).json({
      message: 'Error al crear la sugerencia',
      error: err.message
    });
  }
};

const getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({
      message: 'Error al obtener las sugerencias'
    });
  }
};

const getSuggestionById = async (req, res) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id);
    if (!suggestion) return res.status(404).json({ message: 'Sugerencia no encontrada' });
    res.json(suggestion);
  } catch (err) {
    res.status(500).json({ message: 'Error al buscar la sugerencia' });
  }
};

const updateSuggestion = async (req, res) => {
  try {
    const updated = await Suggestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Sugerencia no encontrada' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar la sugerencia' });
  }
};

const deleteSuggestion = async (req, res) => {
  try {
    const deleted = await Suggestion.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Sugerencia no encontrada' });
    res.json({ message: 'Sugerencia eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar la sugerencia' });
  }
};

module.exports = {
  createSuggestion,
  getSuggestions,
  getSuggestionById,
  updateSuggestion,
  deleteSuggestion
};
