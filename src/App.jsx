import { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

import { useDarkMode } from "./hooks/useDarkMode";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Planner } from "./pages/Planner";
import { Subjects } from "./pages/Subjects";
import { Analytics } from "./pages/Analytics";
import { Resources } from "./pages/Resources";
import { About } from "./pages/About";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
);

export default function App() {
  const [dark, setDark] = useDarkMode();

  const chartTheme = useMemo(
    () => ({
      text: dark ? "#cbd5e1" : "#475569",
      grid: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)",
      tooltipBg: dark ? "#111822" : "#ffffff",
      tooltipText: dark ? "#f8fafc" : "#111827",
    }),
    [dark]
  );

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          labels: { color: chartTheme.text },
        },
        tooltip: {
          backgroundColor: chartTheme.tooltipBg,
          titleColor: chartTheme.tooltipText,
          bodyColor: chartTheme.tooltipText,
          borderColor: chartTheme.grid,
          borderWidth: 1,
          padding: 12,
          displayColors: false,
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: chartTheme.text },
          border: { display: false },
        },
        y: {
          grid: { color: chartTheme.grid },
          ticks: { color: chartTheme.text },
          border: { display: false },
        },
      },
    }),
    [chartTheme]
  );

  const weeklyData = useMemo(
    () => ({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: [3.5, 4.5, 2.5, 4, 5, 3.2, 4.1],
          backgroundColor: dark ? "#60a5fa" : "#2563eb",
          borderRadius: 6,
          barThickness: 26,
        },
      ],
    }),
    [dark]
  );

  const lineData = useMemo(
    () => ({
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          data: [18, 21, 19, 26, 29],
          borderColor: "#2563eb",
          backgroundColor: dark ? "rgba(96, 165, 250, 0.16)" : "rgba(37, 99, 235, 0.12)",
          fill: true,
          tension: 0.38,
          pointRadius: 4,
          pointBackgroundColor: "#2563eb",
          pointBorderWidth: 0,
        },
      ],
    }),
    [dark]
  );

  const subjectData = useMemo(
    () => ({
      labels: ["Data Structures", "Python", "Mathematics", "Electronics"],
      datasets: [
        {
          data: [18, 15, 21, 13],
          backgroundColor: ["#2563eb", "#16a34a", "#f59e0b", "#0ea5e9"],
          borderWidth: 0,
        },
      ],
    }),
    []
  );

  return (
    <Router>
      <div className="app-surface min-h-screen transition-colors duration-300">
        <ScrollToTop />
        <Navbar dark={dark} setDark={setDark} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  chartOptions={chartOptions}
                  weeklyData={weeklyData}
                  subjectData={subjectData}
                />
              }
            />
            <Route path="/planner" element={<Planner />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route
              path="/analytics"
              element={
                <Analytics chartOptions={chartOptions} lineData={lineData} />
              }
            />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
