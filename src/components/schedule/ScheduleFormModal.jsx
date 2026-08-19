import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScheduleFormModal({ isOpen, onClose, onSave, eventToEdit, selectedDate }) {
  const [formData, setFormData] = useState({
    title: "",
    type: "Study",
    date: selectedDate,
    startTime: "09:00",
    endTime: "",
    notes: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (eventToEdit) {
        setFormData({
          title: eventToEdit.title || "",
          type: eventToEdit.type || "Study",
          date: eventToEdit.date || selectedDate,
          startTime: eventToEdit.startTime || "09:00",
          endTime: eventToEdit.endTime || "",
          notes: eventToEdit.notes || "",
        });
      } else {
        setFormData({
          title: "",
          type: "Study",
          date: selectedDate,
          startTime: "09:00",
          endTime: "",
          notes: "",
        });
      }
      setError("");
    }
  }, [eventToEdit, isOpen, selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!formData.startTime) {
      setError("Start time is required.");
      return;
    }
    if (formData.endTime && formData.endTime <= formData.startTime) {
      setError("End time must be after start time.");
      return;
    }
    
    onSave(formData);
  };

  const types = ["Lecture", "Lab", "Study", "Break", "Activity", "Routine", "Travel", "Revision", "Other"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#111822]"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-ink dark:text-white">
                {eventToEdit ? "Edit Event" : "Add Event"}
              </h3>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  {error}
                </div>
              )}
              
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  placeholder="e.g. Mathematics Lecture"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Start Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    End Time
                  </label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  rows={2}
                  placeholder="Optional details..."
                />
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
                >
                  Save Event
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
