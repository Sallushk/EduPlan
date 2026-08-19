import { BookOpen, Pause, Play, RotateCcw, Timer, CheckCircle2, Circle, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge, Reveal, SectionHeading } from "../components/ui/SharedComponents";
import { topics } from "../data/mockData";
import { useTimerSettings } from "../hooks/useTimerSettings";
import { TimerSettingsModal } from "../components/timer/TimerSettingsModal";

function FocusTimer() {
  const { settings, setSettings } = useTimerSettings();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [mode, setMode] = useState("focus"); // 'focus', 'shortBreak', 'longBreak'
  const [seconds, setSeconds] = useState(settings.focusDuration * 60);
  const [running, setRunning] = useState(false);

  const [sessions, setSessions] = useState(() => {
    if (typeof window === "undefined") return 12;
    return Number(window.localStorage.getItem("eduplan-focus-sessions") || 12);
  });
  
  const [focusTimeMinutes, setFocusTimeMinutes] = useState(() => {
    if (typeof window === "undefined") return 372; // 6.2 hours default fallback
    return Number(window.localStorage.getItem("eduplan-focus-time") || 372);
  });

  // Apply new settings if changed
  const handleSaveSettings = (newSettings) => {
    setSettings(newSettings);
    if (!running) {
      setMode("focus");
      setSeconds(newSettings.focusDuration * 60);
    }
  };

  useEffect(() => {
    if (!running) return undefined;
    const timerId = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          if (mode === "focus") {
            const nextSessionCount = sessions + 1;
            setSessions(nextSessionCount);
            window.localStorage.setItem("eduplan-focus-sessions", String(nextSessionCount));
            
            const nextFocusTime = focusTimeMinutes + settings.focusDuration;
            setFocusTimeMinutes(nextFocusTime);
            window.localStorage.setItem("eduplan-focus-time", String(nextFocusTime));

            if (nextSessionCount % settings.sessionsBeforeLongBreak === 0) {
              setMode("longBreak");
              return settings.longBreakDuration * 60;
            } else {
              setMode("shortBreak");
              return settings.shortBreakDuration * 60;
            }
          } else {
            // Finished a break, return to focus mode but paused
            setMode("focus");
            setRunning(false);
            return settings.focusDuration * 60;
          }
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [running, mode, sessions, settings, focusTimeMinutes]);

  const resetTimer = () => {
    setRunning(false);
    setMode("focus");
    setSeconds(settings.focusDuration * 60);
  };

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  const modeLabels = {
    focus: "STUDYING",
    shortBreak: "SHORT BREAK",
    longBreak: "LONG BREAK"
  };

  const displayHours = (focusTimeMinutes / 60).toFixed(1);

  return (
    <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 relative">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Pomodoro
          </p>
          <div className="mt-2 flex items-center gap-2">
            <h3 className="text-2xl font-bold text-ink dark:text-white">Focus timer</h3>
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="grid h-7 w-7 place-items-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-brand-600 dark:hover:bg-white/10 dark:hover:text-brand-400"
              aria-label="Timer settings"
            >
              <Settings size={16} />
            </button>
          </div>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
          <Timer size={22} />
        </div>
      </div>

      <div className="mt-10 grid place-items-center rounded-lg border border-slate-200 bg-slate-50 py-12 dark:border-white/10 dark:bg-[#111822]">
        <p className="text-6xl font-black text-ink dark:text-white">
          {minutes}:{remainingSeconds}
        </p>
        <div className={`mt-6 rounded-md border px-6 py-3 text-sm font-bold shadow-sm ${
          mode === 'focus' 
            ? 'border-brand-100 bg-white text-brand-700 dark:border-brand-500/20 dark:bg-white/5 dark:text-brand-100'
            : 'border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-100'
        }`}>
          {modeLabels[mode]}
        </div>
        <div className="mt-8 flex items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
            onClick={() => setRunning((value) => !value)}
          >
            {running ? <Pause size={18} /> : <Play size={18} />}
            {running ? "Pause" : "Start"}
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Reset timer"
            onClick={resetTimer}
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-slate-50 p-4 dark:bg-white/5">
          <p className="text-2xl font-bold text-ink dark:text-white">{sessions}</p>
          <p className="mt-1 text-sm text-muted dark:text-slate-400">Sessions logged</p>
        </div>
        <div className="rounded-md bg-slate-50 p-4 dark:bg-white/5">
          <p className="text-2xl font-bold text-ink dark:text-white">{displayHours}h</p>
          <p className="mt-1 text-sm text-muted dark:text-slate-400">Focus time today</p>
        </div>
      </div>

      <TimerSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentSettings={settings}
        onSave={handleSaveSettings}
      />
    </div>
  );
}

function ExamPrepCard() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Exam Preparation
          </p>
          <h3 className="mt-2 text-2xl font-bold text-ink dark:text-white">Data Structures</h3>
          <p className="mt-2 text-sm text-muted dark:text-slate-400">
            Exam on September 10 - 24 days remaining
          </p>
        </div>
        <Badge tone="amber">Revision Plan</Badge>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
          >
            {topic.done ? (
              <CheckCircle2 size={18} className="text-success-500" />
            ) : (
              <Circle size={18} className="text-slate-400" />
            )}
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {topic.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesCard() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Notes
          </p>
          <h3 className="mt-2 text-2xl font-bold text-ink dark:text-white">Organized by subject</h3>
        </div>
        <BookOpen size={22} className="text-brand-600 dark:text-brand-100" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["Python", ["Loops", "Functions", "OOP", "Exceptions"]],
          ["Data Structures", ["Arrays", "Linked List", "Stack", "Queue"]],
        ].map(([subject, notes]) => (
          <div key={subject} className="rounded-md bg-slate-50 p-4 dark:bg-white/5">
            <p className="font-bold text-ink dark:text-white">{subject}</p>
            <div className="mt-3 space-y-2">
              {notes.map((note) => (
                <div key={note} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {note}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Resources() {
  return (
    <div className="pt-20">
      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Resources" title="Assignments, exams, notes, and focus in one flow.">
              EduPlan keeps the daily work connected to long-term academic goals, so no lab
              record, revision topic, or project milestone has to live in a separate place.
            </SectionHeading>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <FocusTimer />
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={0.06}>
                <ExamPrepCard />
              </Reveal>
              <Reveal delay={0.12}>
                <NotesCard />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
