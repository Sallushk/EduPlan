import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const footerGroups = [
    ["Product", ["Dashboard", "Smart Planner", "Analytics", "AI Assistant"]],
    ["Resources", ["Study Templates", "Exam Prep", "Pomodoro", "Notes"]],
    ["Company", ["About", "Contact", "Privacy Policy", "Terms"]],
  ];

  return (
    <footer id="about" className="border-t border-slate-200 bg-white px-5 py-12 dark:border-white/10 dark:bg-[#0b1017] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-600 text-white">
              <GraduationCap size={22} />
            </span>
            <span className="text-xl font-bold text-ink dark:text-white">EduPlan</span>
          </Link>
          <p className="mt-4 max-w-md leading-7 text-muted dark:text-slate-400">
            An intelligent productivity and academic management platform built specifically
            for engineering students.
          </p>
          <div className="mt-6 flex gap-3">
            {["in", "x", "yt"].map((item) => (
              <a
                key={item}
                href="/"
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
                  <Link
                    key={link}
                    to="/"
                    className="text-sm text-muted transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link}
                  </Link>
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
