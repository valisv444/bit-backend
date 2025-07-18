const Subscriber = require('../models/subscriber');
const bcrypt = require('bcryptjs');

exports.createSubscriber = async (req, res) => {
  try {
    const { nombre, correo, intereses, password } = req.body;

    const existing = await Subscriber.findOne({ correo });
    if (existing) {
      return res.status(400).json({ message: 'Este correo ya está registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSubscriber = new Subscriber({
      nombre,
      correo,
      intereses,
      password: hashedPassword
    });

    await newSubscriber.save();
    res.status(201).json({ message: 'Suscripción exitosa.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al suscribirse', error });
  }
};

exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener suscriptores', error });
  }
};


exports.deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Subscriber.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Suscriptor no encontrado' });
    }
    res.json({ message: 'Suscriptor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar suscriptor', error });
  }
};

exports.updateSubscriber = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo, intereses, password } = req.body;

    const updatedFields = { nombre, correo, intereses };

    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    const updated = await Subscriber.findByIdAndUpdate(id, updatedFields, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Suscriptor no encontrado' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar suscriptor', error });
  }
};
