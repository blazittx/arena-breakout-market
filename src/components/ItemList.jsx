import React, { useState, useEffect } from 'react';
import ItemListNavbar from './ItemListNavbar';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

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
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
      setFilteredItems(filtered);
    }
  };

  const filterBySubCategory = (subCategory) => {
    const filtered = items.filter(item =>
      item.category.toLowerCase() === selectedCategory.toLowerCase() &&
      (item.item_type.toLowerCase().includes(subCategory.toLowerCase()) || subCategory.toLowerCase().includes(item.item_type.toLowerCase()))
    );
    setFilteredItems(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = items.filter(item => item.item_name.toLowerCase().includes(query.toLowerCase()));
    setFilteredItems(filtered);
  };

  return (
    <div className="p-4 text-white w-80p">
      <ItemListNavbar onCategorySelect={filterByCategory} onSubCategorySelect={filterBySubCategory} onSearch={handleSearch} />
      <h1 className="text-2xl font-bold my-4">Item List</h1>
      <div className="mb-4">
        <button
          onClick={() => sortItems('price-desc')}
          className="mr-2 bg-transparent border border-light-gray text-white py-2 px-4 hover:bg-light-gray"
        >
          Sort by Price Descending
        </button>
        <button
          onClick={() => sortItems('price-asc')}
          className="bg-transparent border border-light-gray text-white py-2 px-4 hover:bg-light-gray"
        >
          Sort by Price Ascending
        </button>
      </div>
      <div className="grid grid-cols-1 gap-0.5 bg-dark">
        <div className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr] gap-0.5 bg-light-gray py-2">
          <div className="text-center">Image</div>
          <div className="text-center">Name</div>
          <div className="text-center">Price</div>
          <div className="text-center">Type</div>
          <div className="text-center">Hitpoints</div>
          <div className="text-center">Armor Class</div>
        </div>
        {filteredItems.map((item) => (
          <div key={item.item_id} className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr] gap-0.5 items-center">
            <div className="flex justify-center bg-dark-gray">
              <img src={item.item_image} alt={item.item_name} className="w-full object-contain" />
            </div>
            <div className="text-center h-full align-middle flex justify-center items-center bg-dark-gray">{item.item_name}</div>
            <div className="text-center h-full align-middle flex justify-center items-center bg-dark-gray">
              <img src="/img/currency/bonds.png" alt="Currency" className="h-6 w-6 mr-2" />
              {item.item_price}
            </div>
            <div className="text-center h-full align-middle flex justify-center items-center bg-dark-gray">{item.item_type}</div>
            <div className="text-center h-full align-middle flex justify-center items-center bg-dark-gray">{item.hitpoints}</div>
            <div className="text-center h-full align-middle flex justify-center items-center bg-dark-gray">{item.armor_class}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
