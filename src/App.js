import {
  Routes,
  Route,
} from 'react-router-dom';
import Root from './routes/Root';
import Category from './routes/Category';
import Home from './routes/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="Home" element={<Home />} />
        <Route path="Category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
