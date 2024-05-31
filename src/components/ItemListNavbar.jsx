import React from 'react';

const Navbar = ({ onCategorySelect }) => {
  const categories = [
    'Favorite', 'Keys', 'Barter', 'Containers', 'Provisions', 'Gear',
    'Med', 'Sights', 'Suppressors', 'Weapon', 'Ammo', 'Magazines',
    'Tactical devices', 'Weapon parts', 'Special equipment', 'Maps',
    'Ammo boxes', 'Currency', 'Repair', 'Not Functional', 'Quest items'
  ];

  return (
    <div className="bg-black">
      <div className="">
        <h1 className="text-2xl font-bold text-white">Flea Market</h1>
        <input
          type="text"
          placeholder="Search"
          className="mt-2 p-2 rounded bg-gray-800 text-white w-full"
        />
        <div className="flex flex-wrap mt-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className="mr-2 mb-2 bg-transparent border border-gray-700 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
