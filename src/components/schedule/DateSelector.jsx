import { ChevronLeft, ChevronRight } from "lucide-react";

export function DateSelector({ selectedDate, setSelectedDate }) {
  const handlePrevDay = () => {
    const [year, month, day] = selectedDate.split("-").map(Number);
    const prev = new Date(year, month - 1, day - 1);
    
    const y = prev.getFullYear();
    const m = String(prev.getMonth() + 1).padStart(2, "0");
    const d = String(prev.getDate()).padStart(2, "0");
    setSelectedDate(`${y}-${m}-${d}`);
  };

  const handleNextDay = () => {
    const [year, month, day] = selectedDate.split("-").map(Number);
    const next = new Date(year, month - 1, day + 1);
    
    const y = next.getFullYear();
    const m = String(next.getMonth() + 1).padStart(2, "0");
    const d = String(next.getDate()).padStart(2, "0");
    setSelectedDate(`${y}-${m}-${d}`);
  };

  const setToday = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    setSelectedDate(`${y}-${m}-${d}`);
  };

  // Format the date for display
  const [year, month, day] = selectedDate.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const isToday = selectedDate === todayStr;

  return (
    <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
      <h4 className="font-bold text-ink dark:text-white">
        {isToday ? "Today's schedule" : formatter.format(dateObj)}
      </h4>
      <div className="flex items-center gap-1">
        <button
          onClick={setToday}
          className="mr-2 rounded-md px-2 py-1.5 text-xs font-semibold text-brand-600 transition hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"
        >
          Today
        </button>
        <button
          onClick={handlePrevDay}
          className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Previous day"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNextDay}
          className="grid h-8 w-8 place-items-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Next day"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
