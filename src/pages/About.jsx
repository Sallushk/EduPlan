import { Bot, Zap, Flame, Trophy, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, SectionHeading } from "../components/ui/SharedComponents";
import { achievements } from "../data/mockData";

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

export function About() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 px-5 py-20 dark:bg-[#0b1017] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionHeading eyebrow="About EduPlan" title="Empowering Engineering Students">
              EduPlan was built with one core mission: to help students navigate the chaotic
              schedule of engineering life. Between lectures, labs, assignments, and exams,
              staying organized shouldn't be another chore.
            </SectionHeading>
            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Build By Salahuddin Shaikh :)
            </p>
          </Reveal>
        </div>
      </section>
      <AIAssistantSection />
      <GamificationSection />
    </div>
  );
}
