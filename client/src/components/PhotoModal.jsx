import React from 'react'
import { motion } from 'framer-motion'

export default function PhotoModal({photo, onClose}){
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.8}} transition={{duration:0.3}} className="bg-white rounded-lg p-6 max-w-lg w-full relative" onClick={(e)=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div className="w-full bg-cover bg-center rounded-md" style={{ height: '75%', backgroundImage: `url(${photo.imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center', aspectRatio: '4 / 3', }}></div>
        <div className="mt-4">
          <h4 className="text-xl font-semibold" style={{color:'#5E355E'}}>{photo.title}</h4>
          <p className="text-sm text-warmgray mt-2">{photo.note}</p>
        </div>
      </motion.div>
    </div>
  )
}
