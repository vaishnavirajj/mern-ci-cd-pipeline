import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get('/api/items');
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/items', newItem);
      setNewItem({ name: '', description: '' });
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>DevOps MERN Project</h1>
      <form onSubmit={addItem} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={e => setNewItem(prev => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={e => setNewItem(prev => ({ ...prev, description: e.target.value }))}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
