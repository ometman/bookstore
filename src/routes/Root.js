import {
// Outlet,
// Link,
// NavLink,
// useLoaderData,
// Form,
// redirect,
// useNavigation,
} from 'react-router-dom';
// import { getBooks, createBook } from '../components/Books';

import Header from '../components/Header';
import Books from '../components/Books';
import NewBookForm from '../components/NewBookForm';

// export async function loader() {
//   const books = await getBooks();
//   return { books };
// }

// export async function action() {
//   const book = await createBook();
//   return redirect(`/contacts/${contact.id}/edit`);
// }

export default function Root() {
  // const { books } = useLoaderData();
  // const navigation = useNavigation();

  return (
    <>
      <div className="app-container">
        <div id="bookstore">
          <Header />
          <Books />
          <NewBookForm />
        </div>
      </div>
    </>
  );
}
