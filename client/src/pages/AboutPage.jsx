import React from "react";
import { motion } from "framer-motion";

const hobbies = [
  { name: "Poetry" },
  { name: "Sketching" },
  { name: "Painting" },
  { name: "Travelling" }
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <div className="w-full bg-zinc-200 font-neue text-zinc-800 pb-24 overflow-hidden">
      {/* Page Header */}
      <div className="mb-12 pt-[5rem] md:pt-[7rem] border-2 mt-24 mx-4 md:m-10 rounded-3xl pb-8 border-zinc-400">

        <h1 className="font-founders uppercase text-5xl sm:text-7xl md:text-8xl leading-none px-6 md:px-10">
          About me
        </h1>
        {/* </motion.h1> */}
        <p
          className="max-w-3xl text-zinc-600 mt-4 text-base md:text-lg px-6 md:px-10"
        >
          Developer & designer focused on building fast, functional, and visually compelling web applications.
        </p>
      </div>

      <div className="px-6 md:px-10 max-w-7xl mx-auto mt-10">
        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Biography / Who I am (Spans 2 cols on lg/md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-zinc-100/60 backdrop-blur-md border border-zinc-300/80 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[320px]"
          >
            <div className="space-y-6">
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block">WHO I AM</span>
              <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 leading-tight">
                Hey, I'm Sahildeep Singh. A 22-year-old developer based in Punjab, India.
              </h2>
              <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                I recently completed my graduation and am currently pursuing my Master's degree. I've spent the past couple of years exploring web architecture, UI interfaces, and visual graphics. Most of what I know comes from building projects, reading documentations, and breaking things until they work.
              </p>
              <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                I love working at the intersection of technical engineering and graphic aesthetics. Whether it's optimization, API designs, or vector designs—I make sure every detail counts.
              </p>
            </div>
            <div className="mt-8 text-zinc-900 font-semibold text-sm tracking-wide">
              ALWAYS LEARNING • ALWAYS BUILDING
            </div>
          </motion.div>

          {/* Card 2: Quick Stats (Spans 1 col) */}
          <motion.div
            variants={itemVariants}
            className="bg-zinc-950 text-zinc-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:scale-[1.01] transition-transform min-h-[320px]"
          >
            <div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block mb-6">QUICK BITES</span>
              <ul className="space-y-4 font-neue">
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500 text-sm">Location</span>
                  <span className="font-medium">Punjab, India</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500 text-sm">Age</span>
                  <span className="font-medium">22 Years</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500 text-sm">Focus</span>
                  <span className="font-medium text-right">Full stack & Art</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500 text-sm">Education</span>
                  <span className="font-medium">Masters Student</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="bg-[#9f4]/15 text-[#9f4] border border-[#9f4]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider block">
                Available for Freelance
              </span>
            </div>
          </motion.div>

          {/* Card 3: Design & Craft Pillars (Spans 1 col) */}
          <motion.div
            variants={itemVariants}
            className="bg-zinc-100/60 backdrop-blur-md border border-zinc-300/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[320px]"
          >
            <div className="space-y-6">
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block">PILLARS</span>
              <h3 className="text-xl font-bold text-zinc-900 uppercase font-founders tracking-wide">Areas of Interest</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <h4 className="font-semibold text-zinc-900 text-base">Frontend Engineering</h4>
                  <p className="text-zinc-500 text-sm">Crafting clean layouts, fluid interactions, and highly responsive page layouts.</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-semibold text-zinc-900 text-base">Backend Architecture</h4>
                  <p className="text-zinc-500 text-sm">Implementing REST endpoints, structured database models, and server performance.</p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-semibold text-zinc-900 text-base">Visual Art & Prototyping</h4>
                  <p className="text-zinc-500 text-sm">Creating brand graphics, mockups, vector illustrations, and Figma layouts.</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 4: Experiential Playbook (Spans 2 cols on lg/md) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-zinc-100/60 backdrop-blur-md border border-zinc-300/80 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between min-h-[320px]"
          >
            <div className="space-y-6">
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block">PLAYBOOK</span>
              <h3 className="text-xl font-bold text-zinc-900 uppercase font-founders tracking-wide">My Journey Timeline</h3>
              <div className="space-y-6 mt-4">
                <div className="flex gap-4 items-start">
                  <span className="text-sm font-semibold bg-zinc-950 text-zinc-100 px-3 py-1 rounded-lg">PRESENT</span>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-zinc-900">Masters Studies & Freelancing</h4>
                    <p className="text-zinc-500 text-sm">Deepening technical understanding, developing customized products for local and global clients, and prototyping side builds.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-sm font-semibold bg-zinc-200 border border-zinc-300 text-zinc-800 px-3 py-1 rounded-lg">ONGOING</span>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-zinc-900">Hackathon Developer</h4>
                    <p className="text-zinc-500 text-sm">Collaborating in fast-paced software environments, building functional prototype projects, and solving core constraints under deadlines.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-sm font-semibold bg-zinc-200 border border-zinc-300 text-zinc-800 px-3 py-1 rounded-lg">PAST 2Y</span>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-zinc-900">Digital Art & Layout Assets</h4>
                    <p className="text-zinc-500 text-sm">Working with graphic layouts, editing vector models, and developing clean brand concepts using Photoshop and Figma.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hobbies & Interests Section */}
        <div className="mt-16 md:mt-24 border-t border-zinc-300/60 pt-16">
          <div className="space-y-8">
            <div>
              <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block mb-2">BEYOND CODE</span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase font-founders text-zinc-900">
                Hobbies & Interests
              </h2>
              <p className="text-zinc-500 max-w-xl text-sm md:text-base mt-2">
                A few things I enjoy doing when I'm not coding or designing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="bg-white hover:bg-zinc-900 border border-zinc-300/80 hover:border-zinc-900 text-zinc-700 hover:text-zinc-100 font-medium py-2.5 px-4 md:py-3 md:px-6 rounded-full cursor-default transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow"
                >
                  <span className="text-sm md:text-base font-neue font-medium">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
