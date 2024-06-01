//itemListNavbar.jsx
import React, { useState } from 'react';

const ItemListNavbar = ({ onCategorySelect, onSubCategorySelect, onSearch }) => {
  const categories = [
    'Favorite', 'Keys', 'Barter', 'Containers', 'Provisions', 'Gear',
    'Med', 'Sights', 'Suppressors', 'Weapon', 'Ammo', 'Magazines', 'Tactical devices', 'Weapon parts', 'Special equipment', 'Maps',
    'Ammo boxes', 'Currency', 'Repair', 'Not Functional', 'Quest items'
  ];

  const gearSubCategories = [
    'Backpacks', 'Unarmored Chest Rigs', 'Helmets', 'Masks', 'Headsets', 'Armored Rigs', 'Gas Masks', 'Body Armor', 'Thermal Imaging'
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl font-bold text-white">Flea Market</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          className="mt-2 p-2 rounded bg-light-gray text-white w-full"
        />
        <div className="flex flex-wrap mt-4">
          {selectedCategory === 'Gear' ? (
            gearSubCategories.map(subCategory => (
              <button
                key={subCategory}
                onClick={() => onSubCategorySelect(subCategory)}
                className="mr-2 mb-2 bg-transparent border border-light-gray text-white px-4 py-2 rounded hover:bg-light-gray"
              >
                {subCategory}
              </button>
            ))
          ) : (
            categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="mr-2 mb-2 bg-transparent border border-light-gray text-white px-4 py-2 rounded hover:bg-light-gray"
              >
                {category}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListNavbar;
