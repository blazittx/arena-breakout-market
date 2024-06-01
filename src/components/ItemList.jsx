import React, { useState, useEffect } from 'react';
import ItemListNavbar from './ItemListNavbar';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/.netlify/functions/fetch-items');
      const data = await response.json();
      setItems(data.items);
      setFilteredItems(data.items);
    };

    fetchItems();
  }, []);

  const sortItems = (type) => {
    const sortedItems = [...filteredItems].sort((a, b) => {
      if (type === 'price-asc') {
        return a.item_price - b.item_price;
      } else if (type === 'price-desc') {
        return b.item_price - a.item_price;
      }
      return 0;
    });
    setFilteredItems(sortedItems);
  };

  const filterByCategory = (category) => {
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.item_type === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="p-4 text-white w-80p">
      <ItemListNavbar onCategorySelect={filterByCategory} />
      <h1 className="text-2xl font-bold my-4">Item List</h1>
      <div className="mb-4">
        <button
          onClick={() => sortItems('price-desc')}
          className="mr-2 bg-transparent border border-light-gray text-white py-2 px-4 rounded hover:bg-light-gray"
        >
          Sort by Price Descending
        </button>
        <button
          onClick={() => sortItems('price-asc')}
          className="bg-transparent border border-light-gray text-white py-2 px-4 rounded hover:bg-light-gray"
        >
          Sort by Price Ascending
        </button>
      </div>
      <table className="min-w-full bg-transparent text-white shadow-md rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-light-gray">Image</th>
            <th className="py-2 px-4 border-b border-light-gray">Name</th>
            <th className="py-2 px-4 border-b border-light-gray">Price</th>
            <th className="py-2 px-4 border-b border-light-gray">Type</th>
            <th className="py-2 px-4 border-b border-light-gray">Hitpoints</th>
            <th className="py-2 px-4 border-b border-light-gray">Armor Class</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.item_id} className="border-b border-light-gray">
              <td className="py-2 px-4 text-center"><img src={item.item_image} alt={item.item_name} className=" h-32 object-cover rounded" /></td>
              <td className="py-2 px-4 text-center">{item.item_name}</td>
              <td className="py-2 px-4 text-center">{item.item_price}</td>
              <td className="py-2 px-4 text-center">{item.item_type}</td>
              <td className="py-2 px-4 text-center">{item.hitpoints}</td>
              <td className="py-2 px-4 text-center">{item.armor_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
