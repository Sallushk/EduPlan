import { CalendarDays, Plus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useScheduleManager } from "../../hooks/useScheduleManager";
import { DateSelector } from "./DateSelector";
import { ScheduleEvent } from "./ScheduleEvent";
import { ScheduleFormModal } from "./ScheduleFormModal";
import { DeleteConfirmModal } from "./DeleteConfirmModal";

export function ScheduleWidget() {
  const { events, addEvent, updateEvent, deleteEvent } = useScheduleManager();
  
  // Use local date string to avoid timezone offset issues
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  
  const [selectedDate, setSelectedDate] = useState(todayStr);

  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [eventToDelete, setEventToDelete] = useState(null);

  // Filter and sort events chronologically
  const currentEvents = events
    .filter((e) => e.date === selectedDate)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  // Handlers
  const handleAddClick = () => {
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (event) => {
    setEventToDelete(event);
    setIsDeleteOpen(true);
  };

  const handleSaveEvent = (formData) => {
    if (editingEvent) {
      updateEvent({ ...formData, id: editingEvent.id });
    } else {
      addEvent(formData);
    }
    setIsFormOpen(false);
  };

  const handleConfirmDelete = () => {
    if (eventToDelete) {
      deleteEvent(eventToDelete.id);
    }
    setIsDeleteOpen(false);
    setEventToDelete(null);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#111822]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="text-brand-600 dark:text-brand-100" />
        </div>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-1 rounded-md bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 transition hover:bg-brand-100 dark:bg-brand-500/10 dark:text-brand-100 dark:hover:bg-brand-500/20"
        >
          <Plus size={14} /> Add Event
        </button>
      </div>

      <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

      <div className="space-y-4">
        {currentEvents.length > 0 ? (
          <AnimatePresence mode="popLayout">
            {currentEvents.map((item, index) => (
              <ScheduleEvent
                key={item.id}
                event={item}
                index={index}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
              />
            ))}
          </AnimatePresence>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              No events scheduled for today.
            </p>
            <button
              onClick={handleAddClick}
              className="mt-3 text-sm font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              + Add Event
            </button>
          </div>
        )}
      </div>

      <ScheduleFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveEvent}
        eventToEdit={editingEvent}
        selectedDate={selectedDate}
      />

      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
