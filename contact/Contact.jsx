

import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";

function Contact() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { threshold: 0.4 });

  return (
    <div id="contact" className="text-white px-4 md:px-10 py-12 bg-[#1f242d]">
      <div ref={headingRef}>
        <Motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl text-[#0ef] font-bold mb-10"
        >
          CONTACT
        </Motion.h1>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Social Section */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold">Follow Me</h2>
            <a
              className="text-[#0ef] text-lg md:text-xl hover:underline"
              href="https://www.linkedin.com/in/ibinabo-okparaki-7570015b"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold">Contact Me</h2>
            <p className="text-base md:text-lg">
              <span className="text-[#0ef] font-medium">Email:</span> siblistic@yahoo.com
            </p>
            <p className="text-base md:text-lg">
              <span className="text-[#0ef] font-medium">Phone Number:</span> 09059000543
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
