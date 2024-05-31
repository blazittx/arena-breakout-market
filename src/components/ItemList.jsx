// src/components/ItemList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [sortType, setSortType] = useState('price-desc'); // default sorting by price descending

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('YOUR_ORACLE_REST_ENDPOINT/items/all');
      setItems(response.data.items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const sortItems = (type) => {
    const sortedItems = [...items];
    if (type === 'price-desc') {
      sortedItems.sort((a, b) => b.item_price - a.item_price);
    } else if (type === 'price-asc') {
      sortedItems.sort((a, b) => a.item_price - b.item_price);
    }
    setItems(sortedItems);
    setSortType(type);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Item List</h1>
      <div className="mb-4">
        <button onClick={() => sortItems('price-desc')} className="mr-2">Sort by Price Descending</button>
        <button onClick={() => sortItems('price-asc')}>Sort by Price Ascending</button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Image</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Type</th>
            <th className="py-2">Hitpoints</th>
            <th className="py-2">Armor Class</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id}>
              <td className="py-2"><img src={item.item_image} alt={item.item_name} className="w-16 h-16 object-cover" /></td>
              <td className="py-2">{item.item_name}</td>
              <td className="py-2">{item.item_price}</td>
              <td className="py-2">{item.item_type}</td>
              <td className="py-2">{item.hitpoints}</td>
              <td className="py-2">{item.armor_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
