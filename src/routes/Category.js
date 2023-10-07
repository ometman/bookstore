import { useSelector } from 'react-redux';

export default function Category() {
  const { status } = useSelector((store) => store.categories);
  return (
    <div className="app-container">
      <div className="category-container">
        <div id="category">
          <h1> Welcome to Categories page </h1>
          <div className="categories">
            <h3 key="category" className="category">
              {status}
            </h3>
          </div>
        </div>
      </div>
    </div>

  );
}
