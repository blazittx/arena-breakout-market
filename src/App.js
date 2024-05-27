// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/items" element={<ItemList />} />
          <Route path="/" element={<h1 className="text-4xl text-center mt-8">Welcome to the Market Clone</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
