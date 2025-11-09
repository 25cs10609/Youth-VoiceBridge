import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, HeartHandshake, Mic, ArrowRight } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col items-center">
      <header className="w-full py-6 flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold text-sky-600">VoiceBridge</h1>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition">Join Us</button>
      </header>

      <main className="flex flex-col items-center mt-20 text-center px-4">
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Raise Your Voice, <span className="text-sky-600">Bridge the World</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl text-lg">
          A youth-led platform to share stories of human rights, connect across borders, 
          and build a network of solidarity that starts with one voice.
        </p>

        <div className="flex gap-6 mt-10">
          <button className="bg-sky-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-sky-600 transition">
            <Mic size={20}/> Share Your Story
          </button>
          <button className="border border-sky-500 text-sky-600 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-sky-100 transition">
            <Globe2 size={20}/> Explore Voices
          </button>
        </div>
      </main>

      <section className="mt-24 grid md:grid-cols-3 gap-10 px-8 max-w-6xl">
        {[
          { icon: <HeartHandshake className='text-sky-500' size={40}/>, title: 'Global Youth Network', desc: 'Connect with students worldwide who advocate for human rights in their communities.' },
          { icon: <Mic className='text-sky-500' size={40}/>, title: 'Voice Archive', desc: 'Share your country’s stories of injustice and resilience to inspire action.' },
          { icon: <Globe2 className='text-sky-500' size={40}/>, title: 'Collaborative Action', desc: 'Join or create campaigns that move from awareness to real-world change.' },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              {item.icon}
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <footer className="mt-24 mb-10 text-gray-500 text-sm">
        © 2025 VoiceBridge. Created by Students for Global Solidarity.
      </footer>
    </div>
  )
}