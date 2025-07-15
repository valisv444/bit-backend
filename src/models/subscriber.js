const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  seccion: { type: String, default: "subscribers" }
}, {
  timestamps: true
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
