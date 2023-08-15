import React, { useState } from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h2>Book List</h2>
      <BookForm onAddBook={handleAddBook} />
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BookList;
