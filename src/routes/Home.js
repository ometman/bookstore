// import { Link } from 'react-router-dom';
// import Header from '../components/Header';

import Books from '../components/Books';
import NewBookForm from '../components/NewBookForm';

export default function Home() {
  return (
    <div className="app-container">
      <div className="store-container">
        <div id="bookstore">
          <Books />
          <NewBookForm />
        </div>
      </div>
    </div>
  );
}
