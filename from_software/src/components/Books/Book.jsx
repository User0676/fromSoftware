
import React from 'react';

function Book({ book }) {
  return (
    <div>
      <img src={`/images/${book.image}`} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
}

export default Book;