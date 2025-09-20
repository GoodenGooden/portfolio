

import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { FaLink, FaGithub } from "react-icons/fa";

function Project() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { threshold: 0.4 });

  const projects = [

    {
      src: "/image/menu.png",
      text: "A user-friendly tool for restaurants, cafés, and bars to create digital menus. Show menus on screens, tablets, or QR codes, and update them anytime. P:S this project is a live project built with a team of various developers, designers, QA tester ETC ",
      textt: "Built with React, TypeScript, TailwindCSS",
      link: "https://visit.menu/",
      linkk: "https://github.com/hngprojects/Menu-Swift_Frontend",
    },

     {
      src: "/image/pro.png",
      text: " This is an investment app were users can fund wallet, create a vault which includes purpose of savings, maturity and many more ",
      textt: "Built with Next.JS, context API, Firebase,  TailwindCSS",
      link: "https://investment-wheat-seven.vercel.app/ ",
      linkk: " https://github.com/GoodenGooden/Investment ",
    },

     {
      src: "/image/shop.png",
      text: "A responsive e-commerce UI prototype showcasing frontend design skills, animations, and layouts, ready for full-stack expansion.",
      textt: "Built with React/Redux, Supabase, TailwindCSS",
      link: "https://mall-dp8u.vercel.app/",
      linkk: "https://github.com/GoodenGooden/mall",
    },


    {
      src: "/image/cnn.png",
      text: "A responsive CNN news website clone replicating the layout and feel of CNN.",
      textt: "Built with HTML, CSS/SASS",
      link: "https://cn-nclone.vercel.app/",
      linkk: "https://github.com/GoodenGooden/CNNclone",
    },

    
    {
      src: "/image/card.png",
      text: "A ticketing app prototype with a clean, responsive interface for ticket management with interactive components.",
      textt: "Built with React, Context API, TypeScript, TailwindCSS",
      link: "https://ticket-nine-olive.vercel.app/",
      linkk: "https://github.com/GoodenGooden/Typescript-ticket",
    },

    
    {
      src: "/image/exchange.png",
      text: "A currency converter allowing users to input a value and convert between currencies with a clean UI.",
      textt: "Built with HTML, JavaScript (MVC), TailwindCSS",
      link: "https://converter-psi-steel.vercel.app/",
      linkk: "https://github.com/GoodenGooden/currency-converter",
    },
  ];

  return (
    <div
      id="project"
      className="min-h-screen py-20 px-4 md:px-10 text-white bg-[#1f242d]"
    >
      <div ref={headingRef}>
        <Motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl text-[#0ef] font-bold mb-12"
        >
          PROJECTS
        </Motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg min-w-0"
          >
            <img
              src={project.src}
              alt={project.text}
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-center sm:object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
            />

            {/* Hover Content */}
            <div
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 
              group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-500 gap-3 px-4 md:px-6"
            >
              <p className="text-white text-center text-xs md:text-base font-semibold leading-relaxed break-words max-w-xs md:max-w-sm">
                {project.text}
              </p>

              <p className="text-[12px] md:text-[16px] text-white/80 text-center break-words max-w-xs md:max-w-sm">
                {project.textt}
              </p>

              <div className="flex gap-6 mt-3">
                <a
                  className="text-xl md:text-2xl text-[#0ef] hover:scale-110 transition-transform"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>

                <a
                  className="text-xl md:text-2xl text-[#0ef] hover:scale-110 transition-transform"
                  href={project.linkk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

