import { Route, Routes } from 'react-router-dom';
import Root from './routes/Root';
import Category from './routes/Category';
import Books from './components/Books';
import './style/index.css';

function App() {
  return (
    <div className="parent-container">
      <Root />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
