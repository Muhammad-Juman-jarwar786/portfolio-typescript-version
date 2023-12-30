import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";

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
        scrolled ? "bg-primary" : "bg-primary"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            if (toggle == true) {
              setToggle(!toggle);
            }
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Muhammad Juman &nbsp;
            {/* <span className="sm:block hidden"> | Unfolding Developer</span> */}
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${
              active === "" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
              if (toggle == true) {
                setToggle(!toggle);
              }
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${
              active === "about" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => {
              setActive("about");
              window.scrollTo(0, 0);
              if (toggle == true) {
                setToggle(!toggle);
              }
            }}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`${
              active === "work" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => {
              setActive("work");
              window.scrollTo(0, 0);
              if (toggle == true) {
                setToggle(!toggle);
              }
            }}
          >
            <Link to="/projects">Work</Link>
          </li>
          <li
            className={`${
              active === "contact" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => {
              setActive("contact");
              window.scrollTo(0, 0);
              if (toggle == true) {
                setToggle(!toggle);
              }
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li
            className={`${
              active === "login" ? "text-white" : "text-secondary"
            } hover:text-yellow-400 text-[18px] font-medium cursor-pointer transition-all duration-500 hover:scale-105`}
            onClick={() => setActive("login")}
          >
            <Link to="/login">Admin Login</Link>
          </li> */}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="w-[38px] h-[28px]" onClick={() => setToggle(!toggle)}>
            <div
              className={` ${
                !toggle
                  ? "w-[18px] h-[2.8px] bg-white rounded-md ml-[14px] opacity-100"
                  : "opacity-0 w-0 h-0"
              } transition-all duration-1000 ease-in-out`}
            ></div>
            <div
              className={` ${
                !toggle ? " mt-[6px] " : "rotate-[135deg] mt-3 "
              } transition-all duration-700 ease-in-out rounded-md bg-white w-8 h-[2.8px]`}
            ></div>
            <div
              className={` ${
                !toggle ? " mt-[6px]" : "rotate-[-135deg]  mt-[-2.5px]"
              } transition-all duration-700 ease-in-out rounded-md bg-white w-8 h-[2.8px]`}
            ></div>
          </div>

          <div
            className={`${
              !toggle
                ? "w-0 h-[100vh] absolute top-16 right-0 my-0 p-0"
                : "p-6 black-gradient absolute top-16 right-0 my-2 w-full h-[100vh]"
            }  z-10 transition-all duration-500 ease-in-out rounded-xl`}
          >
            {toggle && (
              <ul className="list-none flex mt-20 items-center flex-1 flex-col gap-4">
                <li
                  className={`font-poppins font-semibold cursor-pointer text-[20px] ${
                    active === "" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive("");
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`font-poppins font-semibold cursor-pointer text-[20px] ${
                    active === "about" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive("about");
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  className={`font-poppins font-semibold cursor-pointer text-[20px] ${
                    active === "work" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive("work");
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to="/projects">Work</Link>
                </li>
                <li
                  className={`font-poppins font-semibold cursor-pointer text-[20px] ${
                    active === "contact" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive("contact");
                    setToggle(!toggle);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li
                  className={`font-poppins font-semibold cursor-pointer text-[20px] ${
                    active === "login" ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("login");
                  }}
                >
                  <Link to="/login">Admin Login</Link>
                </li> */}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
