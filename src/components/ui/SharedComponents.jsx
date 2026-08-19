import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }) {
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

export function Badge({ children, tone = "blue" }) {
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

export function SectionHeading({ eyebrow, title, children, align = "center" }) {
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

export function ProgressBar({ value, color = "bg-brand-500" }) {
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

export function MiniMetric({ icon: Icon, value, label, tone = "blue" }) {
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

export function StatCard({ icon: Icon, value, label, helper, tone = "blue" }) {
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

export function StatusBadge({ status }) {
  if (status === "Done") return <Badge tone="green">Done</Badge>;
  if (status === "Pending") return <Badge tone="amber">Pending</Badge>;
  return <Badge tone="neutral">Not Started</Badge>;
}
