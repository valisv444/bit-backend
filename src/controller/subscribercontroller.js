const Subscriber = require('../models/subscriber');

const createSubscriber = async (req, res) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json({
      message: '¡Gracias por suscribirte a la Biblioteca Medieval!',
      data: savedSubscriber
    });
  } catch (err) {
    res.status(400).json({
      message: 'Error al crear la suscripción',
      error: err.message
    });
  }
};

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({
      message: 'Error al obtener las suscripciones'
    });
  }
};

module.exports = {
  createSubscriber,
  getSubscribers
};
