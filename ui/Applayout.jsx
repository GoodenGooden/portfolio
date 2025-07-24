import Navbar from "../components/Navbar";
import About from "../about/About";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Project from "../project/Project";

function Applayout() {
  return (
    <div className="bg-[#101622] text-white ">
      <header>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
      </header>
    </div>
  );
}

export default Applayout;
