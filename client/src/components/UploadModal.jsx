import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { uploadPhoto } from '../api';

export default function UploadModal({ onClose, onUploadSuccess }) {
  const [formData, setFormData] = useState({ imageFile: null, title: '', note: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('imageFile', formData.imageFile);
    data.append('title', formData.title);
    data.append('note', formData.note);

    try {
      const newPhoto = await uploadPhoto(data);
      onUploadSuccess(newPhoto);
      onClose();
    } catch (error) {
      console.error('Error uploading photo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-beige p-6 rounded-lg max-w-lg w-full soft-card"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-warmgray text-lg"
        >
          ✖
        </button>
        <h4 className="text-lg font-medium mb-4" style={{ color: '#5E355E' }}>
          Upload a New Memory
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm text-warmgray mb-1">Image File (JPG, PNG, JPEG)</label>
            <input
              type="file"
              name="imageFile"
              accept="image/jpeg, image/png, image/jpg"
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
      </motion.div>
    </div>
  );
}