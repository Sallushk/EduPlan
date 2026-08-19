import { Bar, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { CalendarDays, BarChart3, ClipboardCheck, LineChart, BookOpen, Clock3, Flame } from "lucide-react";
import { Badge, Reveal, SectionHeading, StatCard, StatusBadge, ProgressBar, MiniMetric } from "../components/ui/SharedComponents";
import { ScheduleWidget } from "../components/schedule/ScheduleWidget";
import { assignments, subjects } from "../data/mockData";

export function Dashboard({ chartOptions, weeklyData, subjectData }) {
  return (
    <div className="pt-20">
      <section className="px-5 py-20 sm:px-6 lg:px-8">
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
                <ScheduleWidget />

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
    </div>
  );
}
