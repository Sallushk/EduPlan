import { ArrowRight, CheckCircle2, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge, Reveal } from "../components/ui/SharedComponents";
import { features, schedule, subjects } from "../data/mockData";
import { MiniMetric, ProgressBar } from "../components/ui/SharedComponents";
import { ClipboardCheck, Clock3, BookOpen, CalendarDays, LineChart } from "lucide-react";

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
    <section className="grid-paper relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
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
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Get Started <ArrowRight size={18} />
            </Link>
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

function CTASection() {
  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-ink px-6 py-14 text-center shadow-soft dark:border-white/10 dark:bg-white dark:shadow-darkSoft sm:px-10">
          <h2 className="text-4xl font-black text-white dark:text-ink md:text-6xl">
            Make every study hour count.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 dark:text-slate-600">
            Organize your academic life, stay consistent, and build the skills you need for
            your engineering journey.
          </p>
          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Start Planning Free <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Features />
      <CTASection />
    </div>
  );
}
