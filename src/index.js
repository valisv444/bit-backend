const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const bookRoutes = require('./routes/bookroutes');
const authorRoutes = require('./routes/authorroutes');
const infoRoutes = require('./routes/inforoutes');
const subscriberRoutes = require('./routes/subscriberroutes');
const suggestionRoutes = require('./routes/suggestionroutes');
const favoritesRoutes = require('./routes/favoritesroutes');


// Rutas de la API montadas con prefijos claros
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/info', infoRoutes);
app.use('/api/subscribers', subscriberRoutes);       
app.use('/api/suggestions', suggestionRoutes);
app.use('/api/favorites', favoritesRoutes);
               

app.get('/', (req, res) => {
  res.send('⚔️ API de la Biblioteca Medieval funcionando correctamente');
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🟩 Conectado a MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ Error al conectar a MongoDB:', err);
});
