import { Reveal, SectionHeading, ProgressBar } from "../components/ui/SharedComponents";
import { subjects } from "../data/mockData";

export function Subjects() {
  return (
    <div className="pt-20">
      <section className="px-5 py-20 sm:px-6 lg:px-8">
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
    </div>
  );
}
