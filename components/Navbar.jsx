
import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { MdMenu, MdClose } from "react-icons/md";

const Navstyle =
  "text-[16px] md:text-[18px] font-medium cursor-pointer capitalize transition-all duration-300";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["portfolio", "home", "about", "project", "contact"];

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-[100] py-6 px-6 flex items-center justify-end">
      
      {/* Desktop Menu (right-aligned) */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => {
          const linkText = link.charAt(0).toUpperCase() + link.slice(1);
          const isPortfolio = link === "portfolio";
          const Wrapper = isPortfolio ? Motion.div : "div";

          return (
            <Wrapper
              key={link}
              {...(isPortfolio && {
                initial: { x: 100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { duration: 0.8, ease: "easeOut" },
              })}
            >
              <HashLink
                smooth
                to={`/#${link}`}
                className={`${Navstyle} text-white hover:text-[#0ef]`}
              >
                {linkText}
              </HashLink>
            </Wrapper>
          );
        })}
      </div>

      {/* Menu Icon (on the RIGHT for mobile) */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer ml-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <Motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-[60px] right-0 w-full bg-[#1f242d] flex flex-col items-center gap-6 py-6 md:hidden"
        >
          {links.map((link) => (
            <HashLink
              key={link}
              smooth
              to={`/#${link}`}
              onClick={() => setIsOpen(false)}
              className={`${Navstyle} text-white hover:text-[#0ef]`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </HashLink>
          ))}
        </Motion.div>
      )}
    </div>
  );
}

export default Navbar;








/*
import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { MdMenu, MdClose } from "react-icons/md";

const Navstyle =
  "text-[16px] md:text-[18px] font-medium cursor-pointer capitalize transition-all duration-300";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["portfolio", "home", "about", "project", "contact"];

  return (
  <div className="fixed top-0 left-0 w-full bg-transparent z-[100] py-6 px-[50%] flex justify-between items-center ">


      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>

      
      <div className="hidden md:flex items-center">
        {links.map((link) => {
          const linkText = link.charAt(0).toUpperCase() + link.slice(1);
          const isPortfolio = link === "portfolio";
          const Wrapper = isPortfolio ? Motion.div : "div";

          return (
            <Wrapper
              key={link}
              {...(isPortfolio && {
                initial: { x: -100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { duration: 0.8, ease: "easeOut" },
              })}
            >
              <HashLink
                smooth
                to={`/#${link}`}
                className={`${Navstyle} ml-5 text-white hover:text-[#0ef]`}
              >
                {linkText}
              </HashLink>
            </Wrapper>
          );
        })}
      </div>

      
      {isOpen && (
        <Motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-[60px] left-0 w-full bg-[#1f242d] flex flex-col items-center gap-6 py-6 md:hidden"
        >
          {links.map((link) => (
            <HashLink
              key={link}
              smooth
              to={`/#${link}`}
              onClick={() => setIsOpen(false)}
              className={`${Navstyle} text-white hover:text-[#0ef]`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </HashLink>
          ))}
        </Motion.div>
      )}
    </div>
  );
}

export default Navbar;

*/