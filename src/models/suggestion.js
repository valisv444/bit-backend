const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['libro', 'autor', 'genero', 'info'],
    required: true
  },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  usuario: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  seccion: { type: String, default: 'sugerencias' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
