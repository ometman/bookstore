import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="root-container">
      <div className="header">
        <h1 className="heading">
          Bookstore CMS
        </h1>
        <nav className="navbar">
          <ul className="nav-items">
            <li><Link to="home">BOOK</Link></li>
            <li><Link to="category">CATEGORY</Link></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
