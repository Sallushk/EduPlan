import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge, Reveal, SectionHeading } from "../components/ui/SharedComponents";

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

export function Planner() {
  const plannerInputs = [
    "College timetable",
    "Subjects",
    "Exam dates",
    "Assignment deadlines",
    "Available study hours",
    "Personal activities",
  ];

  return (
    <div className="pt-20">
      <section className="bg-white px-5 py-20 dark:bg-[#0b1017] sm:px-6 lg:px-8">
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
            <Link
              to="/planner"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Create My Study Plan <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
