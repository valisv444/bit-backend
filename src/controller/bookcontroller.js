const Book = require('../models/book');

const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el libro', error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const { seccion } = req.query;

    let query = {};
    if (seccion) {
      query.seccion = seccion;
    }

    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error al buscar el libro' });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el libro' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json({ message: 'Libro eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
};
