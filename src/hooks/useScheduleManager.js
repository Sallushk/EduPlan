import { useState, useEffect } from "react";
import { schedule as mockSchedule } from "../data/mockData";

function generateId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2, 15);
}

export function useScheduleManager() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("eduplan-schedule");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing schedule data from localStorage", e);
      }
    }

    // Seed mock data for the current day if localStorage is empty
    const todayStr = new Date().toISOString().split("T")[0];
    const seededEvents = mockSchedule.map((item) => ({
      id: generateId(),
      title: item.title,
      type: item.type,
      date: todayStr,
      startTime: item.time,
      endTime: "", // Mock data does not have end time
      notes: "",
    }));
    return seededEvents;
  });

  useEffect(() => {
    localStorage.setItem("eduplan-schedule", JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents((prev) => [...prev, { ...event, id: generateId() }]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
    );
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((evt) => evt.id !== id));
  };

  return { events, addEvent, updateEvent, deleteEvent };
}
