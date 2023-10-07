import React, { useState } from 'react';
import '../style/addBook.css';
import { useDispatch } from 'react-redux';
import { addBookByThunk } from '../redux/books/booksSlice';

function NewBook() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBookByThunk({
      item_id: `item${crypto.randomUUID()}`,
      category: bookCategory,
      title: bookTitle,
      author: bookAuthor,
    }));

    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
  };

  return (
    <div className="add-book">
      <span>Add New Book</span>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          required
          placeholder="Book Title"
          className="title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />

        <input
          type="text"
          required
          placeholder="Author"
          className="author"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
        />

        <select
          className="category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="Action" key="Action">Action</option>
          <option value="Arts" key="Arts">Fiction</option>
          <option value="Economy" key="Economy">Politics</option>
          <option value="Geography" key="Geography">Technology</option>
          <option value="History" key="History">History</option>
        </select>

        <button type="submit">Add A Book</button>

      </form>
    </div>
  );
}

export default NewBook;
