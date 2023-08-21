import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './containers/BooksPage';
import Categories from './containers/Categories';

function App() {
  return (
    <Router>
      <div className="container d-flex flex-column justify-center align-center">
        <div className="content-container d-flex flex-column justify-center align-center">
          <Navbar />
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route exact path="/" element={<BooksPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
