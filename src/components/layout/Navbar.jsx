import { GraduationCap, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../../data/mockData";

export function Navbar({ dark, setDark }) {
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
        <Link to="/" className="flex items-center gap-3" aria-label="EduPlan home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-600 text-white shadow-sm">
            <GraduationCap size={22} strokeWidth={2.3} />
          </span>
          <span className="text-xl font-bold text-ink dark:text-white">EduPlan</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-white ${
                  isActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-600 dark:text-slate-300"
                }`
              }
            >
              {link.label}
            </NavLink>
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
          <Link
            to="/about"
            className="rounded-md px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/"
            className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Get Started
          </Link>
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
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                      : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                to="/about"
                className="rounded-md border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
              >
                Login
              </Link>
              <Link
                to="/"
                className="rounded-md bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
