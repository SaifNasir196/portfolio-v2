import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import aiform from '@/public/aiform.png';
import quiver from '@/public/quiver.png';
import journal from '@/public/journal.png';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap } from "lucide-react"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer | Sky Bullion",
    location: "Dubai, UAE",
    description:
      "Designed, developed, rigorously tested an accounting software to manage financial transactions, invoices, and payroll. I also worked on a CRM system for managing customer relationships.",
    icon: React.createElement(CgWorkAlt),
    date: "5/23",
  },
  {
    title: "Project Manager | King's Labs",
    location: "London, UK",
    description:
      "Managed a team of four developers to create a Media app for the Marketing team. I worked on the user authentication using appwrite.",
    icon: React.createElement(CgWorkAlt),
    date: "9/23 - 5/24",
  },
  {
    title: "AI Intern | The Kusp - Gateway",
    location: "London, UK",
    description:
      "Managing frontend and backend integration with Java API and React. I also work on the AI model.",
    icon: React.createElement(FaReact),
    date: "7/24 - Present",
  },
  {
    title: "Full Stack Developer | AI Formbuilder by Matcha",
    location: "London, UK",
    description:
      "Founded a startup that creates forms for businesses using AI and tracks responses and analytics.",
    icon: React.createElement(FaReact),
    date: "7/24 - Present",
  },
] as const;

export const infoData = [
    {
        icon: React.createElement(User2),
        text: "Saif Nasir",
    },
    {
        icon: React.createElement(PhoneCall),
        text: "+44 7496386120",
    },
    {
        icon: React.createElement(MailIcon),
        text: "muhammadsaif713@gmail.com",
    },
  
    {
        icon: React.createElement(HomeIcon),
        text: "London | Dubai",
    },
    {
        icon: React.createElement(GraduationCap),
        text: "Bachelors of Science in Computer Science",
    },
] as const

export const educationData = [
  {
    university: 'Al Diyafah High School',
    qualification: 'A-levels in Physics, Math, Computer Science',
    years: '2020 - 2022',
  },
  {
    university: "King's College London",
    qualification: 'Bachelor of Science in Computer Science',
    years: '2022 - 2026',
  },
]

export const coursesData = [
  {
    name: 'Advanced Learning Algorithms',
    institute: 'DeepLearning.ai',
    years: 'Oct 3, 2022',
  },
  {
    name: 'Language and Tools of Financial Analysis',
    institute: 'University of Melbourne',
    years: 'Sep 24, 2022',
  },
  {
    name: 'Machine Learning',
    institute: 'Stanford | Online',
    years: 'Aug 10, 2021',
  },
] as const;

export const projectsData = [
  {
    title: "AI Formbuilder for businesses",
    description:
      "Creates forms for businesses using AI and tracks responses and analytics, includes pricing plans. I am the founder and full-stack developer.",
    tags: ["Next.js", "Drizzle ORM", "Tanstack Query", "Clerk", "Gemini API"],
    imageUrl: aiform,

  },
  {
    title: "Brainf*** Compiler and Interpreter",
    description:
      "A compiler and interpreter for the esoteric programming language Brainf***. Implementing features including file parsing, memory management, loop handling, and program generation. 4.6x performance improvement",
    tags: ["Scala"],
    imageUrl: "",
  },
  {
    title: "Digital Journaling App",
    description:
      "Deployed a web app for journaling, with features including mood tracking, daily reminders, and a secure login system using JSON-web-tokens",
    tags: ["Django", "JWT", "React", "Heroku"],
    imageUrl: journal,
  },
  {
    title: "Task management System",
    description:
      "Deployed a web app for managing task allocation,scheduling and managing multiple teams, fostering a collaborative environment for efficient task coordination",
    tags: ["Django", "SQL",],
    imageUrl: quiver,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "Python",
  "TypeScript",
  "Scala",
  "Django",
  "Next.js",
  "API",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",,
  "Express",
  "SQL",
  "Docker",
  "Framer Motion",
  "Clerk Auth",
  "Appwrite",
  "Shadcn",
] as const;