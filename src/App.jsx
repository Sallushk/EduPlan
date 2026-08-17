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
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Bot,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Clock3,
  Flame,
  GraduationCap,
  LineChart,
  Menu,
  Moon,
  Pause,
  Play,
  RotateCcw,
  Search,
  Sun,
  Target,
  Timer,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Planner", href: "#planner" },
  { label: "Subjects", href: "#subjects" },
  { label: "Analytics", href: "#analytics" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
];

const features = [
  {
    label: "Plan",
    title: "Smart Planning",
    description:
      "Build personalized study schedules around classes, labs, exams, travel, and daily activities.",
    icon: CalendarDays,
  },
  {
    label: "Track",
    title: "Progress Tracking",
    description:
      "Monitor study hours, subject completion, assignments, attendance, and academic goals.",
    icon: Target,
  },
  {
    label: "Revise",
    title: "Exam Preparation",
    description:
      "Break the syllabus into manageable sessions with clean countdowns and revision milestones.",
    icon: BrainCircuit,
  },
  {
    label: "Improve",
    title: "Productivity Analytics",
    description:
      "Understand weekly patterns, focus consistency, completed work, and subject-wise effort.",
    icon: BarChart3,
  },
];

const subjects = [
  {
    name: "Data Structures",
    progress: 82,
    topics: "16/20",
    hours: 18,
    assignments: "4/5",
    exam: "Sep 10",
    accent: "bg-brand-500",
  },
  {
    name: "Python",
    progress: 74,
    topics: "14/19",
    hours: 15,
    assignments: "6/8",
    exam: "Sep 18",
    accent: "bg-success-500",
  },
  {
    name: "Engineering Mathematics",
    progress: 63,
    topics: "12/19",
    hours: 21,
    assignments: "3/5",
    exam: "Aug 29",
    accent: "bg-amber-500",
  },
  {
    name: "Electronics",
    progress: 58,
    topics: "11/19",
    hours: 13,
    assignments: "2/4",
    exam: "Sep 02",
    accent: "bg-sky-500",
  },
];

const schedule = [
  { time: "07:00", title: "Wake up", type: "Routine" },
  { time: "08:00", title: "College commute", type: "Travel" },
  { time: "09:00", title: "Engineering Mathematics", type: "Lecture" },
  { time: "11:00", title: "Data Structures Lab", type: "Lab" },
  { time: "16:00", title: "College ends", type: "Break" },
  { time: "18:00", title: "Data Structures", type: "Study" },
  { time: "19:30", title: "Gym", type: "Activity" },
  { time: "21:30", title: "Mathematics revision", type: "Revision" },
];

const assignments = [
  { task: "Python Task 4", subject: "Python", due: "Aug 20", status: "Pending" },
  { task: "Lab Record", subject: "DS", due: "Aug 21", status: "Done" },
  { task: "Mini Project", subject: "Electronics", due: "Aug 28", status: "Not Started" },
];

const topics = [
  { name: "Arrays", done: true },
  { name: "Linked Lists", done: true },
  { name: "Stack", done: false },
  { name: "Queue", done: false },
  { name: "Trees", done: false },
  { name: "Graphs", done: false },
];

const achievements = [
  "First 10 Study Hours",
  "7-Day Streak",
  "5 Subjects Completed",
  "100 Tasks Completed",
];

function useDarkMode() {
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

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Badge({ children, tone = "blue" }) {
  const tones = {
    blue: "border-brand-100 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-100",
    green:
      "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100",
    amber:
      "border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100",
    neutral:
      "border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, children, align = "center" }) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-ink dark:text-white md:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-8 text-muted dark:text-slate-300 md:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

function ProgressBar({ value, color = "bg-brand-500" }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/88 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0d121a]/88"
          : "border-b border-transparent bg-white/62 backdrop-blur-md dark:bg-[#080b10]/62"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="EduPlan home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-600 text-white shadow-sm">
            <GraduationCap size={22} strokeWidth={2.3} />
          </span>
          <span className="text-xl font-bold text-ink dark:text-white">EduPlan</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <div
            className={`flex items-center overflow-hidden rounded-md border border-slate-200 bg-white transition-all duration-300 dark:border-white/10 dark:bg-white/5 ${
              searchOpen ? "w-48 opacity-100" : "w-11 opacity-95"
            }`}
          >
            <button
              className="grid h-11 w-11 shrink-0 place-items-center text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-white"
              aria-label="Search EduPlan"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <Search size={18} />
            </button>
            <input
              className="min-w-0 bg-transparent pr-3 text-sm text-ink outline-none placeholder:text-slate-400 dark:text-white"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-brand-200 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            aria-label="Toggle dark mode"
            onClick={() => setDark((value) => !value)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#about"
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-white"
          >
            Login
          </a>
          <a
            href="#cta"
            className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle dark mode"
            onClick={() => setDark((value) => !value)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Open navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-white px-5 py-5 shadow-soft dark:border-white/10 dark:bg-[#0d121a] lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a
                href="#about"
                className="rounded-md border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
              >
                Login
              </a>
              <a
                href="#cta"
                className="rounded-md bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

function MiniMetric({ icon: Icon, value, label, tone = "blue" }) {
  const toneClasses = {
    blue: "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-100",
    green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-100",
    amber: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-100",
    slate: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200",
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div
        className={`mb-4 grid h-10 w-10 place-items-center rounded-md ${toneClasses[tone]}`}
      >
        <Icon size={19} />
      </div>
      <p className="text-2xl font-bold text-ink dark:text-white">{value}</p>
      <p className="mt-1 text-sm text-muted dark:text-slate-400">{label}</p>
    </div>
  );
}

function HeroDashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-3 top-12 z-10 hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-[#151c28] sm:block"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500">
            <CheckCircle2 size={18} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Assignment
            </p>
            <p className="text-sm font-bold text-ink dark:text-white">Lab Record Done</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 bottom-10 z-10 hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft dark:border-white/10 dark:bg-[#151c28] md:block"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
            <Flame size={18} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Streak
            </p>
            <p className="text-sm font-bold text-ink dark:text-white">7 days active</p>
          </div>
        </div>
      </motion.div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-[#101722] dark:shadow-darkSoft">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
          <div>
            <p className="text-sm font-bold text-ink dark:text-white">EduPlan Dashboard</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Monday, Aug 17</p>
          </div>
          <Badge tone="green">On Track</Badge>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <MiniMetric icon={ClipboardCheck} value="5" label="Today's Tasks" />
          <MiniMetric icon={Clock3} value="3.5h" label="Study Hours" tone="green" />
          <MiniMetric icon={BookOpen} value="2" label="Assignments Due" tone="amber" />
          <MiniMetric icon={CalendarDays} value="12d" label="Math Exam" tone="slate" />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-ink dark:text-white">Today's Schedule</p>
              <CalendarDays size={18} className="text-brand-600 dark:text-brand-100" />
            </div>
            <div className="space-y-3">
              {schedule.slice(2, 6).map((item) => (
                <div key={`${item.time}-${item.title}`} className="flex items-center gap-3">
                  <span className="w-12 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.time}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-ink dark:text-white">Subject Progress</p>
              <LineChart size={18} className="text-brand-600 dark:text-brand-100" />
            </div>
            <div className="space-y-4">
              {subjects.slice(0, 3).map((subject) => (
                <div key={subject.name}>
                  <div className="mb-1.5 flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <span>{subject.name}</span>
                    <span>{subject.progress}%</span>
                  </div>
                  <ProgressBar value={subject.progress} color={subject.accent} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="grid-paper relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Badge>Intelligent academic workspace</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-ink dark:text-white sm:text-6xl lg:text-7xl"
          >
            PLAN SMART.
            <br />
            STUDY BETTER.
            <br />
            BUILD YOUR FUTURE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted dark:text-slate-300"
          >
            EduPlan helps engineering students organize their schedules, manage assignments,
            track academic progress, prepare for exams, and build consistent study habits
            all in one intelligent workspace.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-3"
          >
            <div className="border-l-2 border-brand-500 pl-4">
              <p className="text-2xl font-bold text-ink dark:text-white">24</p>
              <p className="text-sm text-muted dark:text-slate-400">planned hours</p>
            </div>
            <div className="border-l-2 border-success-500 pl-4">
              <p className="text-2xl font-bold text-ink dark:text-white">92%</p>
              <p className="text-sm text-muted dark:text-slate-400">task clarity</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-2xl font-bold text-ink dark:text-white">4</p>
              <p className="text-sm text-muted dark:text-slate-400">active exams</p>
            </div>
          </motion.div>
        </div>

        <HeroDashboardMockup />
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }) {
  const Icon = feature.icon;

  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:hover:shadow-darkSoft">
        <div className="mb-6 grid h-11 w-11 place-items-center rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
          <Icon size={21} />
        </div>
        <p className="mb-2 text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">
          {feature.label}
        </p>
        <h3 className="text-xl font-bold text-ink dark:text-white">{feature.title}</h3>
        <p className="mt-3 leading-7 text-muted dark:text-slate-300">{feature.description}</p>
      </div>
    </Reveal>
  );
}

function Features() {
  return (
    <section id="features" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label, helper, tone = "blue" }) {
  const toneClasses = {
    blue: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100",
    green: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-100",
    amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-100",
    slate: "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200",
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111822]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted dark:text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-bold text-ink dark:text-white">{value}</p>
        </div>
        <div className={`grid h-11 w-11 place-items-center rounded-md ${toneClasses[tone]}`}>
          <Icon size={20} />
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{helper}</p>
    </div>
  );
}

function DashboardPreview({ chartOptions, weeklyData, subjectData }) {
  return (
    <section id="dashboard" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Dashboard"
            title="Everything you need to stay ahead."
          >
            Lectures, assignments, exam countdowns, focus sessions, progress, and study
            analytics stay visible without turning the interface into noise.
          </SectionHeading>
        </Reveal>

        <Reveal className="mt-12" delay={0.08}>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-soft dark:border-white/10 dark:bg-[#0f1620] dark:shadow-darkSoft md:p-6">
            <div className="mb-5 flex flex-col gap-4 border-b border-slate-200 pb-5 dark:border-white/10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-100">
                  Academic Command Center
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink dark:text-white">
                  Today at a glance
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Mon, Aug 17</Badge>
                <Badge tone="green">7 day streak</Badge>
                <Badge tone="amber">Mathematics in 12d</Badge>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              <StatCard
                icon={ClipboardCheck}
                label="Today's Tasks"
                value="5"
                helper="3 scheduled, 2 deadline based"
              />
              <StatCard
                icon={Clock3}
                label="Study Hours"
                value="3.5h"
                helper="1.5h above weekday target"
                tone="green"
              />
              <StatCard
                icon={BookOpen}
                label="Assignments Due"
                value="2"
                helper="Next deadline: Python Task 4"
                tone="amber"
              />
              <StatCard
                icon={Flame}
                label="Study Streak"
                value="7d"
                helper="Consistent sessions logged"
                tone="slate"
              />
            </div>

            <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1.15fr_0.85fr]">
              <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#111822]">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-bold text-ink dark:text-white">Today's schedule</h4>
                  <CalendarDays size={18} className="text-brand-600 dark:text-brand-100" />
                </div>
                <div className="space-y-4">
                  {schedule.slice(2).map((item, index) => (
                    <motion.div
                      key={`${item.time}-${item.title}`}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.35 }}
                      className="grid grid-cols-[56px_1fr] gap-3"
                    >
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        {item.time}
                      </p>
                      <div className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
                        <p className="text-sm font-bold text-ink dark:text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {item.type}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#111822]">
                <div className="mb-5 flex items-center justify-between">
                  <h4 className="font-bold text-ink dark:text-white">Weekly study hours</h4>
                  <BarChart3 size={18} className="text-brand-600 dark:text-brand-100" />
                </div>
                <div className="h-72">
                  <Bar data={weeklyData} options={chartOptions} />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#111822]">
                  <div className="mb-5 flex items-center justify-between">
                    <h4 className="font-bold text-ink dark:text-white">Assignments</h4>
                    <ClipboardCheck size={18} className="text-brand-600 dark:text-brand-100" />
                  </div>
                  <div className="space-y-3">
                    {assignments.map((assignment) => (
                      <div
                        key={assignment.task}
                        className="rounded-md border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-bold text-ink dark:text-white">
                            {assignment.task}
                          </p>
                          <StatusBadge status={assignment.status} />
                        </div>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {assignment.subject} - due {assignment.due}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#111822]">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="font-bold text-ink dark:text-white">Study split</h4>
                    <LineChart size={18} className="text-brand-600 dark:text-brand-100" />
                  </div>
                  <div className="mx-auto h-52 max-w-[260px]">
                    <Doughnut data={subjectData} options={chartOptions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  if (status === "Done") return <Badge tone="green">Done</Badge>;
  if (status === "Pending") return <Badge tone="amber">Pending</Badge>;
  return <Badge tone="neutral">Not Started</Badge>;
}

function PlannerMockup() {
  const week = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const blocks = [
    ["Math", "DS Lab", "Python"],
    ["Electronics", "Project", "Revision"],
    ["Digital Logic", "Gym", "Math"],
    ["DS", "Lab Record", "Mock Test"],
    ["Python", "Break", "Graph Theory"],
  ];

  return (
    <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-[#111822] dark:shadow-darkSoft">
      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
        <div>
          <p className="text-sm font-bold text-ink dark:text-white">Weekly Planner</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Balanced around college hours</p>
        </div>
        <Badge>Optimized</Badge>
      </div>
      <div className="flex min-w-0 max-w-full gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {week.map((day, dayIndex) => (
          <div
            key={day}
            className="w-[110px] shrink-0 rounded-md bg-slate-50 p-3 dark:bg-white/5"
          >
            <p className="mb-3 text-sm font-bold text-ink dark:text-white">{day}</p>
            <div className="space-y-2">
              {blocks[dayIndex].map((block, blockIndex) => (
                <motion.div
                  key={`${day}-${block}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (dayIndex + blockIndex) * 0.04, duration: 0.35 }}
                  className={`rounded-md border p-2 text-xs font-semibold ${
                    blockIndex === 1
                      ? "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-100"
                      : "border-brand-100 bg-brand-50 text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100"
                  }`}
                >
                  {block}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlannerSection() {
  const plannerInputs = [
    "College timetable",
    "Subjects",
    "Exam dates",
    "Assignment deadlines",
    "Available study hours",
    "Personal activities",
  ];

  return (
    <section id="planner" className="bg-white px-5 py-20 dark:bg-[#0b1017] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <Reveal className="min-w-0">
          <PlannerMockup />
        </Reveal>
        <Reveal className="min-w-0" delay={0.08}>
          <SectionHeading
            eyebrow="Smart Planner"
            title="Turn your goals into a daily plan."
            align="left"
          >
            Enter your academic load once, then let EduPlan organize focused study sessions
            around college timings, travel, labs, exams, and your personal rhythm.
          </SectionHeading>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {plannerInputs.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle2 size={18} className="text-success-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Create My Study Plan <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function ProgressSection() {
  return (
    <section id="subjects" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="Subjects" title="Academic progress, clearly organized.">
            Track attendance, assignments, study hours, exam dates, and syllabus completion
            for every engineering subject.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {subjects.map((subject, index) => (
            <Reveal key={subject.name} delay={index * 0.07}>
              <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:hover:shadow-darkSoft">
                <div className="mb-6 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink dark:text-white">{subject.name}</h3>
                    <p className="mt-1 text-sm text-muted dark:text-slate-400">
                      Exam: {subject.exam}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-brand-600 dark:text-brand-100">
                    {subject.progress}%
                  </span>
                </div>
                <ProgressBar value={subject.progress} color={subject.accent} />
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-md bg-slate-50 p-3 dark:bg-white/5">
                    <p className="text-sm font-bold text-ink dark:text-white">{subject.topics}</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Topics</p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3 dark:bg-white/5">
                    <p className="text-sm font-bold text-ink dark:text-white">{subject.hours}h</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Study</p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3 dark:bg-white/5">
                    <p className="text-sm font-bold text-ink dark:text-white">
                      {subject.assignments}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Tasks</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection({ chartOptions, weeklyData, lineData }) {
  return (
    <section id="analytics" className="bg-slate-50 px-5 py-20 dark:bg-[#0b1017] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="Analytics" title="Know exactly how your week is going.">
            Clean charts reveal study hours, completed tasks, subject-wise time, productivity
            trends, and streak momentum without clutter.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111822]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-ink dark:text-white">Productivity trend</h3>
                <LineChart className="text-brand-600 dark:text-brand-100" size={20} />
              </div>
              <div className="h-80">
                <Line data={lineData} options={chartOptions} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111822]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink dark:text-white">Completed tasks</h3>
                  <ClipboardCheck size={19} className="text-success-500" />
                </div>
                <p className="text-5xl font-black text-ink dark:text-white">34</p>
                <p className="mt-2 text-sm text-muted dark:text-slate-400">
                  11 more than last week
                </p>
                <div className="mt-6">
                  <ProgressBar value={76} color="bg-success-500" />
                </div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111822]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink dark:text-white">Study streak</h3>
                  <Flame size={19} className="text-amber-500" />
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <div
                      key={`${day}-${index}`}
                      className={`grid h-10 place-items-center rounded-md text-xs font-bold ${
                        index < 6
                          ? "bg-brand-600 text-white"
                          : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WorkspaceSection() {
  return (
    <section id="resources" className="px-5 py-20 sm:px-6 lg:px-8">
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
  );
}

function FocusTimer() {
  const [seconds, setSeconds] = useState(24 * 60 + 37);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(() => {
    if (typeof window === "undefined") return 12;
    return Number(window.localStorage.getItem("eduplan-focus-sessions") || 12);
  });

  useEffect(() => {
    if (!running) return undefined;
    const timerId = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          setRunning(false);
          setSessions((count) => {
            const next = count + 1;
            window.localStorage.setItem("eduplan-focus-sessions", String(next));
            return next;
          });
          return 25 * 60;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [running]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return (
    <div className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
            Pomodoro
          </p>
          <h3 className="mt-2 text-2xl font-bold text-ink dark:text-white">Focus timer</h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
          <Timer size={22} />
        </div>
      </div>

      <div className="mt-10 grid place-items-center rounded-lg border border-slate-200 bg-slate-50 py-12 dark:border-white/10 dark:bg-[#111822]">
        <p className="text-6xl font-black text-ink dark:text-white">
          {minutes}:{remainingSeconds}
        </p>
        <div className="mt-6 rounded-md border border-brand-100 bg-white px-6 py-3 text-sm font-bold text-brand-700 shadow-sm dark:border-brand-500/20 dark:bg-white/5 dark:text-brand-100">
          STUDYING
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
            onClick={() => {
              setRunning(false);
              setSeconds(25 * 60);
            }}
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
          <p className="text-2xl font-bold text-ink dark:text-white">6.2h</p>
          <p className="mt-1 text-sm text-muted dark:text-slate-400">Focus time today</p>
        </div>
      </div>
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

function AIAssistantSection() {
  const aiFeatures = [
    "Generate study plans",
    "Explain difficult topics",
    "Create quizzes",
    "Summarize notes",
    "Recommend revision schedules",
    "Identify weak subjects",
  ];

  return (
    <section className="bg-white px-5 py-20 dark:bg-[#0d121a] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="AI Assistant"
            title="Your personal AI study assistant."
            align="left"
          >
            Ask EduPlan to turn upcoming exams, weak topics, and available study time into
            a practical revision path.
          </SectionHeading>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aiFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
              >
                <Zap size={17} className="text-brand-600 dark:text-brand-100" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Ask EduPlan AI <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-soft dark:border-white/10 dark:bg-[#111822] dark:shadow-darkSoft">
            <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-brand-600 text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink dark:text-white">EduPlan AI</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Study plan generator
                  </p>
                </div>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-success-500 pulse-soft" />
            </div>

            <div className="space-y-4">
              <div className="ml-auto max-w-[82%] rounded-lg bg-brand-600 p-4 text-sm leading-6 text-white">
                I have my Data Structures exam in 10 days and can study 2 hours per day.
              </div>
              <div className="max-w-[88%] rounded-lg border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                  Here is a 10-day plan: arrays, linked lists, stacks, queues, trees,
                  graphs, revision, practice questions, mock test, and final review.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {["Day 1 Arrays", "Day 2 Linked Lists", "Day 5 Trees", "Day 9 Mock Test"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-md bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GamificationSection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5 dark:shadow-darkSoft lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div>
              <p className="text-sm font-semibold uppercase text-brand-600 dark:text-brand-100">
                Gamification
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink dark:text-white md:text-5xl">
                Build consistency without clutter.
              </h2>
              <p className="mt-5 leading-8 text-muted dark:text-slate-300">
                Streaks, XP, and achievements give students small wins while keeping the
                product focused on learning.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-[#111822]">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-amber-50 text-amber-500 dark:bg-amber-500/10">
                  <Flame size={24} />
                </div>
                <p className="text-3xl font-black text-ink dark:text-white">7 Day Study Streak</p>
                <p className="mt-3 text-sm text-muted dark:text-slate-400">
                  Keep momentum visible from the dashboard.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-[#111822]">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-100">
                  <Trophy size={24} />
                </div>
                <p className="text-3xl font-black text-ink dark:text-white">1,250 XP</p>
                <p className="mt-3 text-sm text-muted dark:text-slate-400">
                  Earn points by completing focus sessions and assignments.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-[#111822] md:col-span-2">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink dark:text-white">Achievements</h3>
                  <Award size={20} className="text-brand-600 dark:text-brand-100" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="grid h-8 w-8 place-items-center rounded-md bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-500">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="px-5 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-ink px-6 py-14 text-center shadow-soft dark:border-white/10 dark:bg-white dark:shadow-darkSoft sm:px-10">
          <h2 className="text-4xl font-black text-white dark:text-ink md:text-6xl">
            Make every study hour count.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 dark:text-slate-600">
            Organize your academic life, stay consistent, and build the skills you need for
            your engineering journey.
          </p>
          <a
            href="#home"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Start Planning Free <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const footerGroups = [
    ["Product", ["Dashboard", "Smart Planner", "Analytics", "AI Assistant"]],
    ["Resources", ["Study Templates", "Exam Prep", "Pomodoro", "Notes"]],
    ["Company", ["About", "Contact", "Privacy Policy", "Terms"]],
  ];

  return (
    <footer id="about" className="border-t border-slate-200 bg-white px-5 py-12 dark:border-white/10 dark:bg-[#0b1017] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-600 text-white">
              <GraduationCap size={22} />
            </span>
            <span className="text-xl font-bold text-ink dark:text-white">EduPlan</span>
          </a>
          <p className="mt-4 max-w-md leading-7 text-muted dark:text-slate-400">
            An intelligent productivity and academic management platform built specifically
            for engineering students.
          </p>
          <div className="mt-6 flex gap-3">
            {["in", "x", "yt"].map((item) => (
              <a
                key={item}
                href="#home"
                aria-label={`EduPlan social link ${item}`}
                className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-sm font-bold text-slate-600 transition hover:border-brand-200 hover:text-brand-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-ink dark:text-white">{title}</h3>
              <div className="mt-4 grid gap-3">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#home"
                    className="text-sm text-muted transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 pt-6 text-sm text-muted dark:border-white/10 dark:text-slate-400">
        © 2026 EduPlan. Built for engineering students.
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useDarkMode();

  const chartTheme = useMemo(
    () => ({
      text: dark ? "#cbd5e1" : "#475569",
      grid: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(15, 23, 42, 0.08)",
      tooltipBg: dark ? "#111822" : "#ffffff",
      tooltipText: dark ? "#f8fafc" : "#111827",
    }),
    [dark],
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
    [chartTheme],
  );

  const doughnutOptions = useMemo(
    () => ({
      ...chartOptions,
      cutout: "68%",
      scales: undefined,
    }),
    [chartOptions],
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
    [dark],
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
    [dark],
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
    [],
  );

  return (
    <div className="app-surface min-h-screen transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Features />
        <DashboardPreview
          chartOptions={chartOptions}
          weeklyData={weeklyData}
          subjectData={subjectData}
        />
        <PlannerSection />
        <ProgressSection />
        <AnalyticsSection chartOptions={chartOptions} weeklyData={weeklyData} lineData={lineData} />
        <WorkspaceSection />
        <AIAssistantSection />
        <GamificationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
