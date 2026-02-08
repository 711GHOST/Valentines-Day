import React, { useEffect, useState } from 'react';
import { fetchTimeline } from '../api';
import { motion } from 'framer-motion';

export default function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchTimeline().then(setEvents).catch(() => setEvents([]));
  }, []);

  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold mb-6" style={{ color: '#5E355E' }}>
        Our Story Timeline
      </h3>
      <div className="relative border-l-2 border-lavender/50 pl-6">
        {events.map((event, index) => (
          <motion.div
            key={event._id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-8"
          >
            <div className="absolute -left-3 w-6 h-6 bg-lavender rounded-full border-2 border-white"></div>
            <div className="soft-card p-4 rounded-lg">
              <h4 className="text-lg font-medium" style={{ color: '#5E355E' }}>
                {event.title}
              </h4>
              <p className="text-sm text-warmgray mt-1">{event.description}</p>
              <time className="text-xs text-warmgray/70">
                {new Date(event.date).toLocaleDateString()}
              </time>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}