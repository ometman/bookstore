import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import CircularProgress from './CircularProgressbar';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;
  // const {
  //   id, category, title, author, chapter,
  // } = book;

  Book.propTypes = {
    book: PropTypes.node.isRequired,
    // id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // chapter: PropTypes.string.isRequired,
  };

  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <ul className="l-book-card">
        <li>
          <strong>{category}</strong>
        </li>
        <li>
          <h2>{title}</h2>
        </li>
        <li className="author">
          {author}
        </li>
        <ul className="interact1">
          <li>
            <button type="button" className="comment-btn">Comments</button>
          </li>
          <li>
            <button
              type="button"
              className="delete-btn"
              onClick={() => dispatch(
                removeBook(itemId),
              )}
            >
              Delete
            </button>
          </li>
          <li>
            <button type="button" className="edit-btn">Edit</button>
          </li>
        </ul>
      </ul>
      <div className="m-book-card">
        <CircularProgress />
      </div>
      <div className="r-book-card">
        <p>CURRENT CHAPTER</p>
        <strong className="chapter">Chapter 2</strong>
        <button type="button" className="updatebtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
