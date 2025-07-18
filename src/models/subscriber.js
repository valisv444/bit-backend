const mongoose = require('mongoose');
const subscriberSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  intereses: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Subscriber', subscriberSchema); 

