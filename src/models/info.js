const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },        
  descripcion: { type: String, required: true },   
  contexto: { type: String, required: true },     
  anioOrigen: Number,                             
  imagen: String,                                  
  obras: [String],                                 
  exponentes: [String],                            
  seccion: { type: String, required: true }        

}, {
  timestamps: true
});

module.exports = mongoose.model('Info', infoSchema);
