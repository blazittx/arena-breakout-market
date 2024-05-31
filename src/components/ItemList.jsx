import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/.netlify/functions/fetch-items');
      const data = await response.json();
      setItems(data.items);
    };

    fetchItems();
  }, []);

  const sortItems = (type) => {
    const sortedItems = [...items].sort((a, b) => {
      if (type === 'price-asc') {
        return a.item_price - b.item_price;
      } else if (type === 'price-desc') {
        return b.item_price - a.item_price;
      }
      return 0;
    });
    setItems(sortedItems);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold my-4">Item List</h1>
      <div className="mb-4">
        <button
          onClick={() => sortItems('price-desc')}
          className="mr-2 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sort by Price Descending
        </button>
        <button
          onClick={() => sortItems('price-asc')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Sort by Price Ascending
        </button>
      </div>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Image</th>
            <th className="py-2 px-4 bg-gray-200">Name</th>
            <th className="py-2 px-4 bg-gray-200">Price</th>
            <th className="py-2 px-4 bg-gray-200">Type</th>
            <th className="py-2 px-4 bg-gray-200">Hitpoints</th>
            <th className="py-2 px-4 bg-gray-200">Armor Class</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id} className="border-b">
              <td className="py-2 px-4"><img src={item.item_image} alt={item.item_name} className="w-16 h-16 object-cover" /></td>
              <td className="py-2 px-4">{item.item_name}</td>
              <td className="py-2 px-4">{item.item_price}</td>
              <td className="py-2 px-4">{item.item_type}</td>
              <td className="py-2 px-4">{item.hitpoints}</td>
              <td className="py-2 px-4">{item.armor_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
