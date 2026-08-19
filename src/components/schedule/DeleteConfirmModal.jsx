import { AnimatePresence, motion } from "framer-motion";

export function DeleteConfirmModal({ isOpen, onClose, onConfirm }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#111822]"
          >
            <h3 className="text-lg font-bold text-ink dark:text-white">
              Delete this schedule event?
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              This action cannot be undone. Are you sure you want to remove this event from your schedule?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="rounded-md px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
