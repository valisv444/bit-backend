const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nacimiento: String,
  fallecimiento: String,
  obraFamosa: String,
  biografia: String,
  imagen: String,
  enlaceBiografia: String, 
  seccion: { type: String, default: "autores" }
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', authorSchema);

