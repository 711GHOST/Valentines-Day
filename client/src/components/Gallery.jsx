import React, { useEffect, useState } from 'react'
import { fetchPhotos } from '../api'
import { motion } from 'framer-motion'
import PhotoModal from './PhotoModal'
import UploadModal from './UploadModal'

export default function Gallery(){
  const [photos, setPhotos] = useState([])
  const [open, setOpen] = useState(null)
  const [isUploadModalOpen, setUploadModalOpen] = useState(false)

  useEffect(()=>{
    const fetchAndUpdatePhotos = async () => {
      const response = await fetchPhotos()
      if (response.success) {
        setPhotos(response.data)
      } else {
        console.error('Failed to fetch photos:', response.message)
      }
    }

    fetchAndUpdatePhotos()

    const interval = setInterval(fetchAndUpdatePhotos, 5000) // Poll every 5 seconds
    return () => clearInterval(interval)
  },[])

  const handleNewPhoto = (newPhoto) => {
    setPhotos((prev) => [newPhoto, ...prev])
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold" style={{ color: '#5E355E' }}>
          Photo Memories
        </h3>
        <button
          onClick={() => setUploadModalOpen(true)}
          className="bg-lavender text-white px-4 py-2 rounded-md hover:bg-lavender/90"
        >
          Upload Memory
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((p) => (
          <motion.div
            key={p._id || p.imageURL}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="soft-card rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="p-3" onClick={() => setOpen(p)}>
              <div
                className="w-full h-48 bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${p.imageURL})` }}
              ></div>
              <div className="mt-3">
                <h4 className="font-medium" style={{ color: '#5E355E' }}>
                  {p.title}
                </h4>
                <p className="text-sm text-warmgray">{p.note}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {open && <PhotoModal photo={open} onClose={() => setOpen(null)} />}
      {isUploadModalOpen && (
        <UploadModal
          onClose={() => setUploadModalOpen(false)}
          onUploadSuccess={handleNewPhoto}
        />
      )}
    </section>
  )
}
