import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Items</h2>
      {items.length === 0 && <p>No items yet.</p>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> – {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;