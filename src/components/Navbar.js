// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Market Clone</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/items" className="text-white">Items</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
