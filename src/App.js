// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import './App.css';

const App = () => {
  return (
    <div className="flex-col flex items-center">
      <Navbar />
      <ItemList />
    </div>
  );
}

export default App;
