import React from 'react'
import { motion } from 'framer-motion'

export default function Letter(){
  return (
    <section className="py-8">
      <h3 
        className="text-2xl font-semibold mb-6 text-center"
        style={{color:'#5E355E'}}
      >
        A Letter for My Missy
      </h3>

      <motion.div
        initial={{opacity:0,y:10}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
        className="soft-card p-8 rounded-xl leading-8"
      >
        <div 
          style={{fontFamily:'Georgia, serif', color:'#6B3E6B'}}
          className="space-y-6 text-lg"
        >

          <p>
            To the girl who paints my world in shades of beige, lavender, and black,
            I still remember the 17th of July - the day our paths first crossed.
            Who would have thought that an ordinary day would turn into a memory
            I'd cherish forever?
          </p>

          <p>
            Since that moment, every little thing about you has felt like a masterpiece -
            just like the Pinterest aesthetics you adore. To me, you are the mountains
            kissed by the first light of dawn, the royal charm of Udaipur, the endless
            skyline of New York, and the serene beauty of France.
          </p>

          <p>
            You are the sunflower that seeks the light and the lavender that soothes
            my restless mind. I love the way your eyes sparkle at the simplest joys -
            a delicate piece of jewelry, a playful pup wagging its tail (especially
            that Golden Retriever you dream of), or a shared Mexican pizza on a
            quiet evening.
          </p>

          <p>
            Your laughter has a way of dissolving my worries faster than any melody,
            even the songs from your favorite movies like “YJHD,” “Jab We Met,” and
            “Ae Dil Hai Mushkil.”
          </p>

          <p>
            Whenever overthinking clouds your mind, I promise to be there - hand in
            hand, grounding you in the moment, like that magical pause before a kiss
            when the world seems to hold its breath. ✨
          </p>

          <p>
            I dream of the day when your proudest moment arrives - the one you've
            worked so hard for. On that day, I'll be your loudest cheerleader,
            clapping until my hands ache, because I'll know how much it means to you.
          </p>

          <p>
            Until then, let's treasure the little things together - momo at the metro,
            “Galliyan” playing softly in the background, pizza nights, and diary pages
            filled with our memories.
          </p>

          <p>
            Because love, to me, isn't in grand gestures but in the warmth of your
            smile, the touch of your hand, and the magic of being truly seen.
          </p>

          <p className="pt-4">
            May your days always be painted with lavender skies, your mornings
            brightened by sunflower fields, and your dreams soaring higher than
            the mountains you adore.
          </p>

          <p className="pt-6 font-semibold">
            Forever yours, <br />
            Tanshu 😊
          </p>

        </div>
      </motion.div>
    </section>
  )
}