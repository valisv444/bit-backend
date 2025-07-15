const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  genero: { type: String, required: true },
  descripcion: String,
  año: Number,
  imagen: String, 
  pdf: String,
  enlaceCompra: [String],
  ubicacionFisica: String,
  seccion: { type: String, default: "biblioteca" } 
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

