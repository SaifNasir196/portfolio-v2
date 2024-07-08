import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, University } from "lucide-react"

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    institute: 'Stanford Online',
    years: '2018 - 2020',
  },
  {
    name: 'Machine Learning',
    institute: 'Stanford Online',
    years: '2020 - 2022',
  },
  {
    name: 'Language and Tools of Financial Analysis',
    institute: 'Stanford Online',
    years: '2020 - 2022',
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,

  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Scala",
  "Django",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",,
  "Express",
  "SQL",
  "Framer Motion",
] as const;