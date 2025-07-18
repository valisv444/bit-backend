
const Subscriber = require('../models/subscriber');
const bcrypt = require('bcrypt');

const loginSubscriber = async (req, res) => {
  try {
    const { correo, password } = req.body;

 
    if (!correo || !password) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }


    const usuario = await Subscriber.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    
    res.status(200).json({
      message: "Inicio de sesión exitoso",
      usuario: {
        nombre: usuario.nombre,
        correo: usuario.correo,
        interests: usuario.interests,
        allUpdates: usuario.allUpdates
      }
    });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ message: "Error en el servidor", error: error.message });
  }
};

module.exports = { loginSubscriber };
