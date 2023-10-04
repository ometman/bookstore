import { useSelector } from 'react-redux';
import Book from './Book';

export default function Books() {
  const { allbooks } = useSelector((store) => store.books);

  return (
    <div className="books">
      {allbooks.length > 0 ? (
        <div className="book-container">
          {allbooks.map((book) => <Book key={book.id} book={book} />)}
        </div>
      ) : (
        <p className="no-books">
          <i>Currently, No Books</i>
        </p>
      )}
    </div>
  );
}
