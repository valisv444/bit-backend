const Author = require('../models/author');

const createAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el autor', error: err.message });
  }
};

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los autores' });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Autor no encontrado' });
    res.json(author);
  } catch (err) {
    res.status(500).json({ message: 'Error al buscar el autor' });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAuthor) return res.status(404).json({ message: 'Autor no encontrado' });
    res.json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el autor' });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) return res.status(404).json({ message: 'Autor no encontrado' });
    res.json({ message: 'Autor eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el autor' });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor
};
