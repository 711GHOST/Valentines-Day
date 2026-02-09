import React, { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Letter from './components/Letter'
import Timeline from './components/Timeline'
import Surprise from './components/Surprise'
import AudioPlayer from './components/AudioPlayer'
import Slider from './components/Slider'

export default function App(){
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const t = setTimeout(()=>setLoading(false), 2400)
    return ()=>clearTimeout(t)
  },[])

  return (
    <div className="min-h-screen text-warmgray">
      <AudioPlayer />
      {loading ? (
        <LoadingScreen />
      ) : (
        <main className="space-y-20 p-6 max-w-5xl mx-auto">
          <Hero />
          <Slider />
          <Gallery />
          <Letter />
          <Timeline />
          <Surprise />
        </main>
      )}
    </div>
  )
}
