import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center justify-center rounded-xl soft-card" style={{background:'linear-gradient(180deg, rgba(201,182,227,0.12), rgba(246,239,230,0.9))'}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="text-center p-12">
        <h2 className="text-4xl md:text-6xl font-serif text-plum mb-4" style={{color:'#5E355E'}}>
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block"
          >
            Missy
          </motion.span>, loving you feels like home.
        </h2>
        <p className="text-lg text-warmgray max-w-2xl mx-auto">Soft light, quiet mornings, and the comfort of your hand in mine — every day with you is gentle poetry.</p>
      </motion.div>
    </section>
  )
}
