import React, { useEffect, useState } from 'react'
import { fetchLetter } from '../api'
import { motion } from 'framer-motion'

export default function Letter(){
  const [letter, setLetter] = useState(null)
  useEffect(()=>{fetchLetter().then(setLetter).catch(()=>null)},[])

  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold mb-6" style={{color:'#5E355E'}}>A Letter for My Missy</h3>
      <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}} className="soft-card p-6 rounded-lg">
        <p className="prose" style={{fontFamily:'Georgia, serif', color:'#6B3E6B'}}>{letter?.body || 'Loading...'}</p>
      </motion.div>
    </section>
  )
}
