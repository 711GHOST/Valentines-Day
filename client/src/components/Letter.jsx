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
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg leading-relaxed text-gray-700">
          To the girl who paints my world in shades of beige, lavender, and black,
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          I still remember the 17th of July, the day our paths first crossed. Who would have thought that an ordinary day would turn into a memory I’d cherish forever? Since that moment, every little thing about you has felt like a masterpiece – just like the Pinterest aesthetics you adore.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          To me, you are the mountains kissed by the first light of dawn, the royal charm of Udaipur, the endless skyline of New York, and the serene beauty of France. You are the sunflower that seeks the light and the lavender that soothes my restless mind.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          I love the way your eyes sparkle at the simplest joys – a delicate piece of jewelry, a playful pup wagging its tail (especially that Golden Retriever you dream of), or a shared Mexican pizza on a quiet evening. Your laughter has a way of dissolving my worries faster than any melody, even the songs from your favorite movies like “YJHD,” “Jab We Met,” and “Ae Dil Hai Mushkil.”
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Whenever overthinking clouds your mind, I promise to be there – hand in hand, grounding you in the moment, like that magical pause before a kiss when the world seems to hold its breath. ✨
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          I dream of the day when your proudest moment arrives – the one you’ve worked so hard for. On that day, I’ll be your loudest cheerleader, clapping until my hands ache, because I’ll know how much it means to you.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Until then, let’s treasure the little things together – momo at the metro, “Galliyan” playing softly in the background, pizza nights, and diary pages filled with our memories. Because love, to me, isn’t in grand gestures but in the warmth of your smile, the touch of your hand, and the magic of being truly seen.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-4">
          May your days always be painted with lavender skies, your mornings brightened by sunflower fields, and your dreams soaring higher than the mountains you adore.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6 font-semibold">
          Forever yours,<br />
          Tanshu 😊
        </p>
      </div>
    </section>
  )
}
