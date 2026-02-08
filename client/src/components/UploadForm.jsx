import React, { useState } from 'react';
import axios from 'axios';

export default function UploadForm({ onUploadSuccess }) {
  const [formData, setFormData] = useState({ imageURL: '', title: '', note: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/photos', formData);
      onUploadSuccess(response.data);
      setFormData({ imageURL: '', title: '', note: '' });
    } catch (error) {
      console.error('Error uploading photo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="soft-card p-4 rounded-lg">
      <h4 className="text-lg font-medium mb-4" style={{ color: '#5E355E' }}>
        Upload a New Memory
      </h4>
      <div className="mb-3">
        <label className="block text-sm text-warmgray mb-1">Image URL</label>
        <input
          type="url"
          name="imageURL"
          value={formData.imageURL}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm text-warmgray mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm text-warmgray mb-1">Note</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          rows="3"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-lavender text-white px-4 py-2 rounded-md hover:bg-lavender/90"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}