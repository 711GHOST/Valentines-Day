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
    <section className="relative py-20 bg-beige px-10">
      <h2 className="text-3xl font-semibold text-plum mb-6">
        Timeline
      </h2>

      <button
        onClick={() => setModalOpen(true)}
        className="bg-lavender hover:bg-lavender-500 text-white px-6 py-2 rounded-full shadow-soft transition mb-12"
      >
        Add Timeline Event
      </button>

      {isModalOpen && (
        <TimelineForm
          onAddEvent={addEvent}
          onClose={() => setModalOpen(false)}
        />
      )}

      {/* Timeline Container */}
      <div className="relative ml-10">

        {/* Vertical Line */}
        <div className="absolute left-3 top-0 w-1 bg-lavender-200 h-full"></div>

        <div className="space-y-16">
          {events.map((event) => (
            <div key={event._id} className="relative group flex items-start">

              {/* Circle */}
              <div className="relative z-10">
                <div className="w-6 h-6 bg-lavender border-4 border-beige rounded-full shadow-soft transition-all duration-300 group-hover:scale-125 group-hover:bg-lavender-500"></div>
              </div>

              {/* Card */}
              <div className="ml-8 bg-beige-100 border border-lavender-300 p-6 rounded-2xl shadow-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-lavender-500 w-full max-w-xl">
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

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
