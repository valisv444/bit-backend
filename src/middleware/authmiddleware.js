const jwt = require('jsonwebtoken');

// Middleware para verificar token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // El token viene como: Bearer eyJhbGci...
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Aquí puedes acceder al usuario que firmó el token
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = verifyToken;
