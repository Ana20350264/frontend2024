import React from 'react';

const BooksList = ({ books }) => {
  return (
    <div className="container">
    <div className="row justify-content-center">
      {books.map((book, index) => (
        <div key={index} className="col-md-4 mb-5 d-flex align-items-stretch">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title">{book.Title}</h5>
              <h6 className="card-subtitle mb-2">{book.Year}</h6>
              <p className="card-text">Publisher: {book.Publisher}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <br />
    </div>
  );
};

export default BooksList;

