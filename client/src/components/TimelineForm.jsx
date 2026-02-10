import React, { useState } from 'react';
import axios from 'axios';

export default function TimelineForm({ onAddEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/timeline', formData);
      onAddEvent(response.data.data);
      setFormData({ title: '', description: '', date: '' });
    } catch (error) {
      console.error('Error adding timeline event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4" style={{ color: '#5E355E' }}>
        Add a Timeline Event
      </h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="3"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-lavender text-white px-4 py-2 rounded-md hover:bg-lavender/90"
      >
        Add Event
      </button>
    </form>
  );
}