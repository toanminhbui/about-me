"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="highlight bold">
        Highly motivated undergraduate pursuing a degree in 
        <span className="underline"> Computer Engineering </span> 
        at the University of Michigan-Ann Arbor, with a keen interest in the intersection of 
        <span className="bold"> technology</span> and <span className="bold">business</span>.
        Passionate about navigating the dynamic world of <span className="underline">startups </span>
        and exploring the depths of <span className="underline">engineering</span>
        , I thrive on challenges that drive <span className="highlight">innovation</span>
        and <span className="highlight">adaptability</span>. My academic journey and practical experiences are focused on leveraging cutting-edge technology to address 
        <span className="highlight">complex problems</span> and contribute meaningfully to the evolving landscape of technological advancement.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
      </p>
    </motion.section>
  );
}
