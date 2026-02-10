import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen(){
  return (
    <div className="flex items-center justify-center min-h-screen" style={{background:'linear-gradient(160deg,#efe8f6, #f6efe6)'}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="text-center">
        <motion.h1 className="text-3xl md:text-4xl font-serif text-plum text-plum-600 text-plum-700" style={{color:'#6B3E6B'}} initial={{y:10}} animate={{y:0}} transition={{delay:0.2}}>
          For <motion.span whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>Tanya</motion.span> - my <motion.span whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>Missy</motion.span>, my calm, my forever.
        </motion.h1>
        <div className="mt-6 flex justify-center">
          <motion.div className="w-24 h-24 rounded-full bg-lavender/60" animate={{y:[0,-8,0]}} transition={{repeat:Infinity, duration:2}}/>
        </div>
      </motion.div>
    </div>
  )
}
