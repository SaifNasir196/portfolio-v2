import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import aiform from '@/public/aiform.png';
import quiver from '@/public/quiver.png';
import journal from '@/public/journal.png';
import skytuts from '@/public/skytuts.png';
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
    title: "Inclusive Careers Ambassador | King's Career ",
    location: "London, UK",
    description:
      "Organized and hosted panel events featuring industry professionals to provide career insights and guidance, while also leading a comprehensive workshop on web development for over 100 students.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2024 – Jan 2025",
  },
  {
    title: "Software Developer Intern | Sky Bullion Trading",
    location: "Dubai, UAE",
    description:
      "Developed and launched a financial dashboard for real-time tracking of gold prices and market trends, integrating a RAG system with vector similarity search that achieved 95% query accuracy and enhanced data-driven decision-making, increasing trading accuracy by 35%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 – July 2024",
  },
  {
    title: "Software Developer Intern | King's Labs",
    location: "London, UK",
    description:
      "Created a Django API for real-time trading data retrieval, built an automated data pipeline with Cron jobs that reduced manual processing by 20 hours per month, and developed interactive financial charts that streamlined market analysis and improved trading strategies, showcased at King’s Capital.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2023 – March 2024",
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
        text: "k22047344@kcl.ac.uk",
    },
  
    {
        icon: React.createElement(HomeIcon),
        text: "London | Dubai",
    },
    {
        icon: React.createElement(GraduationCap),
        text: "BSc (Honours) in Computer Science",
    },
] as const

export const educationData = [
  {
    university: "King's College London",
    qualification: 'Bachelor of Science in Computer Science',
    years: '2022 - 2026',
  },
  {
    university: 'Al Diyafah High School',
    qualification: 'A-levels in Physics, Math, Computer Science',
    years: '2020 - 2022',
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
    title: "Sky Tutors Platform",
    description:
      "Architected and launched a full-stack tutoring platform using Next.js, PostgreSQL, and Prisma, processing 80+ tutoring sessions monthly. Enhanced database performance with query optimization and caching strategies, reducing page load time by 40%.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    imageUrl: skytuts,
    githubLink: "https://github.com/SaifNasir196/sky-tutors",
    siteLink: "https://saif-nasir.vercel.app/"
  },
  {
    title: "Compilers Module Coursework",
    description:
      "Developed lexers, parsers, and interpreters using Scala, generating efficient and optimized code. Built a compiler targeting LLVM-IR with type inference for tasks like Mandelbrot visualization and Tower of Hanoi, and generated JVM-compatible assembler code with Jasmin, adding support for loops and control flow constructs.",
    tags: ["Scala", "LLVM-IR", "JVM", "Jasmin"],
    imageUrl: "",
    githubLink: "https://github.com/SaifNasir196/jvm-llvm-compilers",
    siteLink: ""
  },
  {
    title: "Digital Journaling App",
    description:
      "Deployed a web app for journaling, with features including mood tracking, daily reminders, and a secure login system using JSON-web-tokens",
    tags: ["Django", "JWT", "React", "Heroku"],
    imageUrl: journal,
    githubLink: "",
    siteLink: ""
  },
  {
    title: "Task management System",
    description:
      "Deployed a web app for managing task allocation,scheduling and managing multiple teams, fostering a collaborative environment for efficient task coordination",
    tags: ["Django", "SQL",],
    imageUrl: quiver,
    githubLink: "",
    siteLink: ""
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "Python",
  "TypeScript",
  "Scala",
  "Django",
  "FastAPI",
  "Next.js",
  "API",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "SQL",
  "Docker",
  "Framer Motion",
  "Clerk Auth",
  "Appwrite",
  "Shadcn",
] as const;