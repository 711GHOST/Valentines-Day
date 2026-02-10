import React, { useEffect, useState } from "react";
import { fetchTimeline } from "../api";
import TimelineForm from "./TimelineForm";

export default function Timeline() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchTimeline();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching timeline events:", error);
      }
    };

    loadEvents();
  }, []);

  const addEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  return (
    <section className="relative py-20 bg-beige">
      <h2 className="text-3xl font-semibold text-center mb-10 text-plum">
        Timeline
      </h2>

      <div className="flex justify-center mb-12">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-lavender hover:bg-lavender-500 text-white px-6 py-2 rounded-full shadow-soft transition"
        >
          Add Timeline Event
        </button>
      </div>

      {isModalOpen && (
        <TimelineForm
          onAddEvent={addEvent}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Center Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-lavender-200 h-full top-0"></div>

      <div className="relative space-y-20">
        {events.map((event, index) => (
          <div
            key={event._id}
            className={`flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Event Card */}
            <div className="w-5/12 bg-beige-100 border border-lavender-300 p-6 rounded-2xl shadow-soft backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-plum">
                {event.title}
              </h3>

              <p className="text-sm text-lavender-500 mt-1">
                {new Date(event.date).toLocaleDateString()}
              </p>

              <p className="text-warmgray mt-3 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-lavender border-4 border-beige rounded-full shadow-soft"></div>
          </div>
        ))}
      </div>
    </section>
  );
}