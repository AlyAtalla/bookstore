import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
