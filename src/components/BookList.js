import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book'; // Assuming you have a Book component

const BookList = () => {
  const books = useSelector(state => state.book);

  return (
    <div>
      {books.map(book => (
        <Book key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
