import bookItems from './bookItems';
import Book from './Book';

export default function Books() {
  return (
    <div className="books">
      {bookItems.length > 0 ? (
        <div className="book-container">
          {bookItems.map((book) => <Book key={book.id} book={book} />)}
        </div>
      ) : (
        <p className="no-books">
          <i>Currently, No Books</i>
        </p>
      )}
    </div>
  );
}
