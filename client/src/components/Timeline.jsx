import React, { useEffect, useState } from 'react';
import { fetchTimeline } from '../api';
import TimelineForm from './TimelineForm';

export default function Timeline() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await fetchTimeline();
        setEvents(events);
      } catch (error) {
        console.error('Error fetching timeline events:', error);
      }
    };

    fetchEvents();
  }, []);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4" style={{ color: '#5E355E' }}>
        Timeline
      </h2>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-lavender text-white px-4 py-2 rounded-md hover:bg-lavender/90 mb-6"
      >
        Add Timeline Event
      </button>
      {isModalOpen && (
        <TimelineForm
          onAddEvent={addEvent}
          onClose={() => setModalOpen(false)}
        />
      )}
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event._id} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold" style={{ color: '#5E355E' }}>
              {event.title}
            </h3>
            <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}