import { motion } from "framer-motion";
import { Edit2, Trash2 } from "lucide-react";

export function ScheduleEvent({ event, index, onEdit, onDelete }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -14 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="group grid grid-cols-[56px_1fr] gap-3"
    >
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 pt-3">
        {event.startTime}
      </p>
      <div className="relative rounded-md border border-slate-200 bg-slate-50 p-3 pr-20 dark:border-white/10 dark:bg-white/5">
        <p className="text-sm font-bold text-ink dark:text-white">{event.title}</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {event.type}
          {event.endTime && ` • Until ${event.endTime}`}
        </p>

        {/* Hover Actions */}
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={() => onEdit(event)}
            className="grid h-8 w-8 place-items-center rounded-md text-slate-400 transition hover:bg-white hover:text-brand-600 hover:shadow-sm dark:hover:bg-[#111822] dark:hover:text-brand-400"
            aria-label="Edit event"
          >
            <Edit2 size={15} />
          </button>
          <button
            onClick={() => onDelete(event)}
            className="grid h-8 w-8 place-items-center rounded-md text-slate-400 transition hover:bg-white hover:text-red-600 hover:shadow-sm dark:hover:bg-[#111822] dark:hover:text-red-400"
            aria-label="Delete event"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
