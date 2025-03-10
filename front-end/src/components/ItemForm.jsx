import React, { useState } from 'react';

const ItemForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    onAdd(form);
    setForm({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={e => setForm(prev => ({ ...prev, description: e.target.value }))}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;