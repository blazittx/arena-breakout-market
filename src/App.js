// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemList />
    </div>
  );
}

export default App;
