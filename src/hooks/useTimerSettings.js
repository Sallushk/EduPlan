import { useState, useEffect } from "react";

const DEFAULT_SETTINGS = {
  focusDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  sessionsBeforeLongBreak: 4,
};

export function useTimerSettings() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("eduplan-timer-settings");
    if (saved) {
      try {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      } catch (e) {
        console.error("Error parsing timer settings", e);
      }
    }
    return DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem("eduplan-timer-settings", JSON.stringify(settings));
  }, [settings]);

  return { settings, setSettings, DEFAULT_SETTINGS };
}
