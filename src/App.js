// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
