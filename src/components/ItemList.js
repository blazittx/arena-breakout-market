// src/components/ItemList.jsx
import React from 'react';

const ItemList = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Items for Sale</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
