
import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.4, // triggers when 40% of the section is visible
  });

  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#1f242d] px-4 md:px-10 py-16 text-white"
    >
      <div ref={ref} className="w-full flex flex-col items-center">
        <Motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl text-[#0ef] font-bold mb-8 text-center"
        >
          ABOUT ME
        </Motion.h1>
      </div>

      <h2 className="text-[16px] md:text-[20px] leading-relaxed text-white/80 max-w-3xl text-center md:text-left">
        When I’m not coding, you’ll often find me exploring new technologies, reading about design trends, or experimenting with side projects that help me learn and grow. I enjoy breaking down complex ideas, building things from scratch, and improving existing solutions—whether it's for work or personal development.
        <br /><br />
        My passion for frontend development started with curiosity and quickly became a career path I’m deeply committed to. Today, I specialize in building responsive, accessible, and interactive web applications using technologies like React, Next.js, and Tailwind CSS. I focus on creating clean, maintainable code and interfaces that deliver seamless user experiences.
        <br /><br />
        For me, coding is more than just writing functions—it’s about solving real problems, optimizing performance, and constantly refining my skills to stay at the cutting edge of web development.
      </h2>
    </div>
  );
}

export default About;







