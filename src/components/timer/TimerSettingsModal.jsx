import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TimerSettingsModal({ isOpen, onClose, currentSettings, onSave }) {
  const [formData, setFormData] = useState(currentSettings);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormData(currentSettings);
      setError("");
    }
  }, [isOpen, currentSettings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow empty string while typing, otherwise parse as integer
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? "" : parseInt(value, 10),
    }));
  };

  const applyPreset = (preset) => {
    setFormData((prev) => ({ ...prev, ...preset }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const { focusDuration, shortBreakDuration, longBreakDuration, sessionsBeforeLongBreak } = formData;
    if (!focusDuration || focusDuration <= 0) {
      setError("Focus duration must be greater than 0.");
      return;
    }
    if (!shortBreakDuration || shortBreakDuration <= 0) {
      setError("Short break duration must be greater than 0.");
      return;
    }
    if (!longBreakDuration || longBreakDuration <= 0) {
      setError("Long break duration must be greater than 0.");
      return;
    }
    if (!sessionsBeforeLongBreak || sessionsBeforeLongBreak <= 0) {
      setError("Sessions before long break must be greater than 0.");
      return;
    }

    onSave(formData);
    onClose();
  };

  const presets = [
    { label: "25 / 5", name: "Classic", settings: { focusDuration: 25, shortBreakDuration: 5, longBreakDuration: 15, sessionsBeforeLongBreak: 4 } },
    { label: "50 / 10", name: "Deep Focus", settings: { focusDuration: 50, shortBreakDuration: 10, longBreakDuration: 30, sessionsBeforeLongBreak: 4 } },
    { label: "90 / 20", name: "Long Study", settings: { focusDuration: 90, shortBreakDuration: 20, longBreakDuration: 45, sessionsBeforeLongBreak: 3 } },
  ];

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
              <h3 className="text-xl font-bold text-ink dark:text-white">Timer Settings</h3>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Quick Presets</p>
              <div className="grid grid-cols-3 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => applyPreset(preset.settings)}
                    className="flex flex-col items-center justify-center rounded-md border border-slate-200 bg-slate-50 p-2 transition hover:border-brand-300 hover:bg-brand-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-brand-500/30 dark:hover:bg-brand-500/10"
                  >
                    <span className="text-sm font-bold text-ink dark:text-white">{preset.label}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Focus (min)
                  </label>
                  <input
                    type="number"
                    name="focusDuration"
                    value={formData.focusDuration}
                    onChange={handleChange}
                    min="1"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Short Break (min)
                  </label>
                  <input
                    type="number"
                    name="shortBreakDuration"
                    value={formData.shortBreakDuration}
                    onChange={handleChange}
                    min="1"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Long Break (min)
                  </label>
                  <input
                    type="number"
                    name="longBreakDuration"
                    value={formData.longBreakDuration}
                    onChange={handleChange}
                    min="1"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Sessions before Long Break
                  </label>
                  <input
                    type="number"
                    name="sessionsBeforeLongBreak"
                    value={formData.sessionsBeforeLongBreak}
                    onChange={handleChange}
                    min="1"
                    className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-white/10 dark:bg-[#0f1620] dark:text-white dark:focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
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
                  Save Settings
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
