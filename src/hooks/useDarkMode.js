import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem("eduplan-theme");
    if (saved) return saved === "dark";
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("eduplan-theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark];
}
