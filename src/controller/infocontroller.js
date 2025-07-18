const Info = require('../models/info');

const createInfo = async (req, res) => {
  try {
    const newInfo = new Info(req.body);
    const savedInfo = await newInfo.save();
    res.status(201).json(savedInfo);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear la información', error: err.message });
  }
};

const getInfo = async (req, res) => {
  try {
    const info = await Info.find(); 
    if (!info || info.length === 0) {
      return res.status(404).json({ message: 'No se encontró información disponible' });
    }
    res.json(info); 
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener la información' });
  }
};

const getInfoById = async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    if (!info) return res.status(404).json({ message: 'Información no encontrada' });
    res.json(info);
  } catch (err) {
    res.status(500).json({ message: 'Error al buscar la información' });
  }
};

const updateInfo = async (req, res) => {
  try {
    const updatedInfo = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedInfo) return res.status(404).json({ message: 'Información no encontrada' });
    res.json(updatedInfo);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar la información' });
  }
};


const deleteInfo = async (req, res) => {
  try {
    const deletedInfo = await Info.findByIdAndDelete(req.params.id);
    if (!deletedInfo) return res.status(404).json({ message: 'Información no encontrada' });
    res.json({ message: 'Información eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar la información' });
  }
};

module.exports = {
  createInfo,
  getInfo,
  getInfoById,
  updateInfo,
  deleteInfo
};