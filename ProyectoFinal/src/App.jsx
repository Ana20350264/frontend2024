import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BooksList from './components/BooksList';
import Swal from 'sweetalert2';



function App() {
  // Estados para almacenar los datos de los libros, el término de búsqueda, etc.
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('searchTerm') || ''); // Obtiene el término de búsqueda de localStorage o usa una cadena vacía
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSortedAZ, setIsSortedAZ] = useState(false);
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage'), 10) || 1); // Obtiene la página actual de localStorage o usa la página 1
  const [booksPerPage] = useState(9); // Define la cantidad de libros por página

  // useEffect para cargar los datos de los libros desde la API al montar el componente
 useEffect(() => {
  axios.get('https://stephen-king-api.onrender.com/api/books')
    .then(response => {
      const booksData = response.data.data || [];
      setBooks(booksData);
      setOriginalBooks(booksData);
      setLoading(false);
    })
// Uso del SWEETALERT    
    .catch(error => {
      console.error('Error fetching data:', error);
      setError('Error al cargar los libros. Por favor intenta más tarde.');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al cargar los libros. Por favor intenta más tarde.',
      });
      setLoading(false);
    });
}, []);


  // useEffect para filtrar los libros cuando cambia el originalBooks o el término de búsqueda
  useEffect(() => {
    filterBooks(searchTerm);
  }, [originalBooks]);

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    filterBooks(value);
    localStorage.setItem('searchTerm', value); // Guarda el término de búsqueda en localStorage
  };

  // Función para filtrar los libros según el término de búsqueda
  const filterBooks = (searchTerm) => {
    let filtered = originalBooks;
    if (searchTerm) {
      filtered = filtered.filter(book => book.Title.toLowerCase().includes(searchTerm));
    }
    setBooks(filtered);
  };

  // Función para ordenar los libros de la A a la Z
  const handleSortAZ = () => {
    const sortedBooks = [...books].sort((a, b) => a.Title.localeCompare(b.Title));
    setBooks(sortedBooks);
    setIsSortedAZ(true);
  };

  // Función para restablecer el orden original de los libros
  const handleResetSort = () => {
    setBooks(originalBooks);
    setIsSortedAZ(false);
  };

  // Lógica para obtener los libros de la página actual
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber); // Guarda la página actual en localStorage
  };

  return (
    <div className="container">
      {/* Contenedor principal */}
      <div className="App d-flex flex-column justify-content-center align-items-center">
        {/* Imagen principal */}
        <img id='king' src="/kinghead2.png" alt="" />
        
        {/* Contenedor de búsqueda */}
        <div className="search-container">
          {/* Campo de entrada para buscar libros por título */}
          <input 
            type="text" 
            placeholder="Buscar por título..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* Botón para ordenar los libros alfabéticamente o restablecer el orden original */}
          <button className="sort-button" onClick={isSortedAZ ? handleResetSort : handleSortAZ}>
            {isSortedAZ ? 'Orden original' : 'Ordenar A-Z'}
          </button>
        </div>
  
        {/* Contenedor de libros */}
        <div className="books">
          {loading ? (
            // Mensaje de carga mientras se obtienen los datos
            <div className="text-center my-5">Cargando...</div>
          ) : error ? (
            // Mensaje de error si falla la obtención de datos
            <div className="alert alert-danger my-5">{error}</div>
          ) : (
            <>
              {/* Componente BooksList que muestra la lista de libros */}
              <BooksList books={currentBooks} />
              {/* Navegación de paginación */}
              <nav>
                <ul className="pagination">
                  {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                      {/* Botón para cambiar de página */}
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
