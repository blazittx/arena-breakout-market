// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/items">
            <ItemList />
          </Route>
          <Route path="/">
            <h1 className="text-4xl text-center mt-8">Welcome to the Market Clone</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
