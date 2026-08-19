import { Line } from "react-chartjs-2";
import { ClipboardCheck, Flame, LineChart } from "lucide-react";
import { ProgressBar, Reveal, SectionHeading } from "../components/ui/SharedComponents";

export function Analytics({ chartOptions, lineData }) {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 px-5 py-20 dark:bg-[#0b1017] sm:px-6 lg:px-8">
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
    </div>
  );
}
