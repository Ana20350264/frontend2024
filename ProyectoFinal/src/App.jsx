import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BooksList from './components/BooksList';

function App() {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSortedAZ, setIsSortedAZ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(9); // Define la cantidad de libros por página

  useEffect(() => {
    axios.get('https://stephen-king-api.onrender.com/api/books')
      .then(response => {
        const booksData = response.data.data || [];
        setBooks(booksData);
        setOriginalBooks(booksData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error al cargar los libros. Por favor intenta más tarde.');
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterBooks(value);
  };

  const filterBooks = (searchTerm) => {
    let filtered = originalBooks;
    if (searchTerm) {
      filtered = filtered.filter(book => book.Title.toLowerCase().includes(searchTerm));
    }
    setBooks(filtered);
  };

  const handleSortAZ = () => {
    const sortedBooks = [...books].sort((a, b) => a.Title.localeCompare(b.Title));
    setBooks(sortedBooks);
    setIsSortedAZ(true);
  };

  const handleResetSort = () => {
    setBooks(originalBooks);
    setIsSortedAZ(false);
  };

  // Lógica para obtener los libros de la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Cambia de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="App d-flex flex-column justify-content-center align-items-center">
        <img id='king' src="../public/kinghead2.png" alt="" />
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar por título..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="sort-button" onClick={isSortedAZ ? handleResetSort : handleSortAZ}>
            {isSortedAZ ? 'Orden original' : 'Ordenar A-Z'}
          </button>
        </div>
        <div className="books">
          {loading ? (
            <div className="text-center my-5">Cargando...</div>
          ) : error ? (
            <div className="alert alert-danger my-5">{error}</div>
          ) : (
            <>
              <BooksList books={currentBooks} />
              <nav>
                <ul className="pagination">
                  {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
