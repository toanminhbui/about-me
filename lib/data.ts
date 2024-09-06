import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { Bs1CircleFill } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import lasso from "@/public/lasso.png";
import helpmecook from "@/public/helpmecook.png";
import secondbrain from "@/public/secondbrain.png"
import price_comparsion from "@/public/price_comparison.jpg"
import stockifyai from "@/public/stockify.png"
import { link } from "fs";
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
    name: "Skills",
    hash: "#skills",
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
    title: "University Of Michigan",
    location: "Ann Arbor, MI",
    description:
      "Currently studying to be a computer engineer, taking a blend of hardware and algorithms with a splash of math, economics, and philosophy",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Engineering Intern",
    location: "San Mateo, CA",
    description:
      `I worked as a software engineering intern for LassoLoop Recycling, a startup at the forefront of in-house recycling solution. Created the demo app to demonstrate capabilities of the Lasso`,
    icon: React.createElement(CgWorkAlt),
    date: "Summer 2024",
  },
  {
    title: "Learner",
    location: "Everywhere, Earth",
    description:
      "While pursuing my degree, I am also committed to immersing myself in the dynamic world of technology in America. As a fast learner and highly self-disciplined individual, my goal is bring ideas from 0-1.",
    icon: React.createElement(Bs1CircleFill),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "LassoLoop Recycling",
    description:
      "I worked as a front-end software engineer intern, developing the lasso web application to demo our ML model used to classify waste at LACIE 2024.",
    tags: ["React", "React Native", "Expo", "TypeScript", "Reduxjs"],
    imageUrl: lasso,
    link: "https://www.lassoloop.com/"
  },
  {
    title: "CampusKorners",
    description:
      "Live repository for anything Michigan. Learn about things happening right now, or get some guidance to navigate college life",
    tags: ["React", "Next.js", "Render", "Vercel", "FastAPI", "REST API", "MongoDB", "RAG"],
    imageUrl: secondbrain,
    link: "https://campuskorners.com/",
  },
  {
    title: "HelpMeCook",
    description:
      "Recipe Generator for people who wants to explore. Specify some allergies and food type, and receive random recipes to try",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Edamam API"],
    imageUrl: helpmecook,
    link: "https://helpmecook.vercel.app/"
  },
  {
    title: "Price Comparator",
    description:
      "Price Comparison helper using beautifulsoup and selenium to scrape and compare prices of items between multiple Vietnamese marketplaces, leading to up to 50% in savings",
    tags: ["Python", "BeautifulSoup", "Selenium"],
    imageUrl: price_comparsion,
    link: "https://github.com/toanminhbui/price_comp"
  },
  {
    title: "StockifyAI",
    description:
      "Stock tracker made for everyday people. summarize up to date news on every tickers, and analyze the sentiment of the news to explain market movements",
    tags: ["Python", "NextJS", "LLM"],
    imageUrl: stockifyai,
    link: "https://stockifyai.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
  "Java",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "BeautifulSoup",
  "Selenium",
  "MongoDB",
  "Redux",
  "FastAPI",
] as const;
