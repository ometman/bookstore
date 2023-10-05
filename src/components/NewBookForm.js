import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function NewBookForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preValue) => ({
      ...preValue, [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({
      title: '',
      author: '',
    });
  };

  return (
    <div className="form-container">
      <h2 className="newbookform-title">Add New Book</h2>
      <form id="newbookform" className="newbookform" onSubmit={handleSubmit}>
        <input name="title" value={formData.title} className="booktitle" required type="text" placeholder="Book title" onChange={handleChange} />
        <input name="author" value={formData.author} className="bookauthor" required type="text" placeholder="Author" onChange={handleChange} />
        <button type="submit" className="submitbtn">
          Submit
        </button>
      </form>
    </div>
  );
}
