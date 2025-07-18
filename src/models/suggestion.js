const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['libro', 'autor', 'genero', 'tema', 'recurso', 'otro'], 
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  usuario: {
    type: String,
    default: 'Anónimo'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);

