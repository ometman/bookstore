import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import '../style/books.css';
import NewBook from './NewBook';
import { fetchBooksByThunk } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBooksByThunk()); }, [dispatch]);

  const { books, isLoading, error } = useSelector((storeState) => storeState.books);
  const availableBooks = Object.keys(books).map((key) => ({ ...books[key][0], item_id: key }));
  const listOfBooks = availableBooks.map((book) => (
    <li key={book.item_id}><Book book={book} /></li>
  ));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul className="books-ul">{listOfBooks}</ul>
      <NewBook />
    </div>
  );
}

export default Books;
