import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root, {
// loader as rootLoader,
// action as rootAction,
} from './routes/Root';

// import ErrorPage from './components/ErrorPage';
import Books, {
// loader as contactLoader,
} from './routes/BKs';

// import Header from './components/Header';

import Category, {
// loader as contactLoader,
} from './routes/Category';

// import EditContact, {
// action as editAction,
// } from './routes/Edit';

// import { action as destroyAction } from './routes/Destroy';

import './App.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: 'books',
        element: <Books />,
        // loader: contactLoader,
      },
      {
        path: 'category',
        element: <Category />,
        // loader: contactLoader,
      },
      // {
      //   path: "contacts/:contactId/edit",
      //   element: <EditContact />,
      //   loader: contactLoader,
      //   action: editAction,
      // },
      // {
      //   path: "contacts/:contactId/destroy",
      //   action: destroyAction,
      // },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
