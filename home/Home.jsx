

import { useState, useRef, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { motion as Motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [showCV, setShowCV] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    threshold: 0.3,
    triggerOnce: false, // ⬅️ important
  });

  // Update animation key whenever inView changes to true
  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      id="home"
      className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-[10%] py-12 md:py-20 bg-[#1f242d] text-white relative"
    >
      {/* Left Content */}
      <div className="flex-1 w-full text-center md:text-left">
        <Motion.h1
          key={`title-${animationKey}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
           className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-snug whitespace-nowrap overflow-x-auto"
>
          My name is Ibinabo Okparaki
        </Motion.h1>

        <Motion.h3
          key={`subtitle-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[20px] sm:text-[24px] md:text-[32px] font-bold mt-4 md:mt-6"
        >
          I'm a{" "}
          <span className="text-[#0ef]">
            <TypeAnimation
              sequence={["Frontend Developer", 1000]}
              wrapper="span"
              speed={300}
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </Motion.h3>

        <Motion.p
          key={`desc-${animationKey}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 md:mt-6 leading-relaxed text-white/80 text-[16px] md:text-[20px]"
        >
          Who loves transforming designs and ideas into clean, responsive, and interactive web interfaces...
        </Motion.p>

        <Motion.div
          key={`buttons-${animationKey}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-8"
        >
          {/* LinkedIn */}
          <div className="inline-flex w-[50px] h-[50px] bg-transparent border-[#0ef] border-2 rounded-full items-center justify-center text-2xl hover:bg-[#0ef] transition-all duration-500 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/ibinabo-okparaki-7570015b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#0ef] hover:text-[#1f242d]" />
            </a>
          </div>

          {/* Download CV */}
          <div className="bg-[#0ef] px-8 py-3 font-bold text-[#1f242d] rounded-full shadow-sm shadow-[#0ef] cursor-pointer">
            <button onClick={() => setShowCV(true)}>Download CV</button>
          </div>
        </Motion.div>
      </div>

      {/* Right Image */}
      <Motion.div
        key={`image-${animationKey}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex-1 flex justify-center items-center w-full"
      >
        <img
          src="/image/image.jpg"
          alt="Ibinabo Okparaki"
          className="w-[220px] sm:w-[300px] md:w-[400px] rounded-full object-cover shadow-lg"
        />
      </Motion.div>

      {/* Fullscreen CV Viewer */}
      {showCV && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setShowCV(false)}
            className="absolute top-5 right-6 text-white text-4xl font-bold z-[101] hover:text-[#0ef] transition"
          >
            ✕
          </button>

          <img
            src="/image/img.png"
            alt="CV Preview"
            className="w-full h-full object-contain px-4 md:px-10"
          />
        </div>
      )}
    </div>
  );
}

export default Home;
