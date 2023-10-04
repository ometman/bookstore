import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from './CircularProgressbar';

const Book = ({ book }) => {
  const {
    category, title, author, chapter,
  } = book;

  Book.propTypes = {
    book: PropTypes.node.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  };

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
            <button type="button" className="delete-btn">
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
        <strong className="chapter">{chapter}</strong>
        <button type="button" className="updatebtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
