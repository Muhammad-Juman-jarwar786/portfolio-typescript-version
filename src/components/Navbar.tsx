import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Code Web &nbsp;
            <span className="sm:block hidden"> | Unfolding Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${
              active === "about" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => setActive("about")}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`${
              active === "work" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => setActive("work")}
          >
            <Link to="/projects">Work</Link>
          </li>
          <li
            className={`${
              active === "contact" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => setActive("contact")}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className={`${
              active === "login" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => setActive("login")}
          >
            <Link to="/login">Admin Login</Link>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "about" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("about");
                }}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "work" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("work");
                }}
              >
                <Link to="/projects">Work</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "contact" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("contact");
                }}
              >
                <Link to="/contact">Contact</Link>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "login" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("login");
                }}
              >
                <Link to="/login">Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
