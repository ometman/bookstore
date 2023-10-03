import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from './CircularProgressbar';
// import booksSlice from '../redux/books/booksSlice';

export default function Books() {
  const dispatch = useDispatch();
  console.log(dispatch);
  const { bookItems } = useSelector((store) => store.books);
  // const book = [
  //   {
  //     id: 1,
  //     category: 'Action',
  //     title: 'The Hunger Grames',
  //     author: 'Sussan Collins',
  //     chapter: 'Chapter 17',
  //     comments: [],
  //   },
  //   {
  //     id: 2,
  //     category: 'Science Fiction',
  //     title: 'Dune',
  //     author: 'Frank Herber',
  //     chapter: 'Chapter 3: "A Lesson Learned"',
  //     comments: [],
  //   },
  //   {
  //     id: 3,
  //     category: 'Economy',
  //     title: 'Capital in the 21st Century',
  //     author: 'Sussan Collins',
  //     chapter: 'Introduction',
  //     comments: [],
  //   },
  // ];

  return (
    <div className="books">
      {bookItems.length ? (
        <ul className="book-container">
          {bookItems.map((book) => (
            <li key={book.id}>
              <div className="book-card">
                <ul className="l-book-card">
                  <li>
                    <strong>{book.category}</strong>
                  </li>
                  <li>
                    <h2>{book.title}</h2>
                  </li>
                  <li className="author">
                    {book.author}
                  </li>
                  <ul className="interact1">
                    <li>
                      Comments
                    </li>
                    <li>
                      Delete
                    </li>
                    <li>
                      Edit
                    </li>
                  </ul>
                </ul>
                <div className="m-book-card">
                  <CircularProgress />
                </div>
                <div className="r-book-card">
                  <p>CURRENT CHAPTER</p>
                  <strong className="chapter">{book.chapter}</strong>
                  <button type="button" className="updatebtn">UPDATE PROGRESS</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No books</i>
        </p>
      )}
    </div>
  );
}
