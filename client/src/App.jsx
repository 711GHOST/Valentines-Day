import React, { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Letter from './components/Letter'
import Timeline from './components/Timeline'
import Surprise from './components/Surprise'
import AudioPlayer from './components/AudioPlayer'
import Slider from './components/Slider'
import ValentineSection from './components/ValentineSection';
import FloatingBackground from './components/FloatingBackground'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [playMusic, setPlayMusic] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen text-warmgray overflow-hidden">
      <FloatingBackground />
      <AudioPlayer play={playMusic} />

      <div className="relative z-10">
        {loading ? (
          <LoadingScreen />
        ) : (
          <main className="space-y-20 p-6 max-w-5xl mx-auto">
            <Hero />
            <Slider />
            <Gallery />
            <Letter />
            <ValentineSection onAccept={() => setPlayMusic(true)} />
            <Timeline />
            <Surprise />
          </main>
        )}
      </div>
    </div>
  )
}
