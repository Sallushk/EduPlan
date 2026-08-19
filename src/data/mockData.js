import {
  BarChart3,
  BrainCircuit,
  CalendarDays,
  Target,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Planner", href: "/planner" },
  { label: "Subjects", href: "/subjects" },
  { label: "Analytics", href: "/analytics" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const features = [
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

export const subjects = [
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

export const schedule = [
  { time: "07:00", title: "Wake up", type: "Routine" },
  { time: "08:00", title: "College commute", type: "Travel" },
  { time: "09:00", title: "Engineering Mathematics", type: "Lecture" },
  { time: "11:00", title: "Data Structures Lab", type: "Lab" },
  { time: "16:00", title: "College ends", type: "Break" },
  { time: "18:00", title: "Data Structures", type: "Study" },
  { time: "19:30", title: "Gym", type: "Activity" },
  { time: "21:30", title: "Mathematics revision", type: "Revision" },
];

export const assignments = [
  { task: "Python Task 4", subject: "Python", due: "Aug 20", status: "Pending" },
  { task: "Lab Record", subject: "DS", due: "Aug 21", status: "Done" },
  { task: "Mini Project", subject: "Electronics", due: "Aug 28", status: "Not Started" },
];

export const topics = [
  { name: "Arrays", done: true },
  { name: "Linked Lists", done: true },
  { name: "Stack", done: false },
  { name: "Queue", done: false },
  { name: "Trees", done: false },
  { name: "Graphs", done: false },
];

export const achievements = [
  "First 10 Study Hours",
  "7-Day Streak",
  "5 Subjects Completed",
  "100 Tasks Completed",
];
