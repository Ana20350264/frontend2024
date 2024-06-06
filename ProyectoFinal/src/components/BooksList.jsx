import React, { useState } from 'react';
import { normalizeFileName } from '../helpers/normalizeFileName';

const BooksList = ({ books }) => {
  // Estado para el libro seleccionado
  const [selectedBook, setSelectedBook] = useState(null);
  // Estado para el indicador de carga
  const [loading, setLoading] = useState(false);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  // Maneja el clic en un libro
  const handleBookClick = (book) => {
    setLoading(true); // Inicia el indicador de carga
    setSelectedBook(book); // Establece el libro seleccionado
    setLoading(false); // Detiene el indicador de carga
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {books.map((book, index) => (
          // Cada libro se representa como una tarjeta
          <div key={index} className="col-md-4 mb-5 d-flex align-items-stretch" onClick={() => handleBookClick(book)}>
            <div className="card">
              <img 
                src={`images/${normalizeFileName(book.Title)}.jpg`} // Imagen del libro normalizada
                className="card-img-top" 
                alt={book.Title} 
              />
              <div className="card-body">
                <h5 className="card-title">{book.Title}</h5> {/* Título del libro */}
                <h6 className="card-subtitle mb-2">{book.Year}</h6> {/* Año de publicación */}
                <p className="card-text">Publisher: {book.Publisher}</p> {/* Editorial del libro */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <div className="text-center my-5">Cargando...</div>} {/* Muestra un mensaje de carga si loading es true */}
      {error && <div className="alert alert-danger my-5">{error}</div>} {/* Muestra un mensaje de error si error no es null */}
      {selectedBook && (
        // Modal que se muestra cuando un libro está seleccionado
        <div className="modal">
          <div className="modal-content">
            <h5>{selectedBook.Title}: Villains</h5> {/* Título del libro en el modal */}
            <p>{selectedBook.Description}</p> {/* Descripción del libro en el modal */}
            <ul>
              {selectedBook.villains.map((villain, index) => (
                // Lista de villanos del libro
                <li key={index}>{villain.name}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedBook(null)}>Cerrar</button> {/* Botón para cerrar el modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksList;
