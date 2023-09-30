import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Books() {
  const percent1 = 64;
  const val1 = <CircularProgressbar value={percent1} text={`${percent1}%`} />;
  const percent2 = 8;
  const val2 = <CircularProgressbar value={percent2} text={`${percent2}%`} />;
  const percent3 = 0;
  const val3 = <CircularProgressbar value={percent3} text={`${percent3}%`} />;
  const book = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Grames',
      author: 'Sussan Collins',
      completed: `${val1}`,
      chapter: 'Chapter 17',
      comments: [],
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herber',
      completed: `${val2}`,
      chapter: 'Chapter 3: "A Lesson Learned"',
      comments: [],
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the 21st Century',
      author: 'Sussan Collins',
      completed: `${val3}`,
      chapter: 'Introduction',
      comments: [],
    },
  ];

  return (
    <div className="books">
      {book.length ? (
        <ul className="book-container">
          {book.map((book) => (
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
                  {book.completed}
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
