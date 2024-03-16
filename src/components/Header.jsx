/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const headerElement = useRef(null);

  useEffect(() => {
    const btnBurger = document.querySelector(".hamburger-logo");
    btnBurger.classList.contains("hamburger-active")
      ? btnBurger.classList.remove("hamburger-active")
      : btnBurger.classList.add("hamburger-active");
  }, [open]);

  const toggleMenu = () => {
    setOpen((state) => !state);
  };

  useEffect(() => {
    const changeNavbarBackground = () => {
      // const header = document.querySelector("header");
      window.scrollY > 0
        ? headerElement.current.classList.add("navbar-fixed")
        : headerElement.current.classList.remove("navbar-fixed");
    };

    window.addEventListener("scroll", changeNavbarBackground);

    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Client", href: "#client" },
    { title: "Product", href: "#product" },
    { title: "Why Us", href: "#why-us" },
    { title: "Contact", href: "#contact" },
  ];

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4, //0.5
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.4, //0.5
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setTimeout(
        document.querySelector(".sun").classList.add("opacity-0"),
        200,
      );
      document.querySelector(".moon").classList.remove("opacity-0");
      return;
    }
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    document.querySelector(".sun").classList.remove("opacity-0");
    setTimeout(document.querySelector(".moon").classList.add("opacity-0"), 200);
  }, [theme]);

  return (
    <>
      <header
        ref={headerElement}
        className="absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-transparent px-4 py-2 xl:px-5"
      >
        <a
          href="#home"
          className="text-logo block text-base font-bold text-white lg:text-lg xl:text-xl 2xl:text-2xl"
        >
          iAMENITIES.
        </a>
        <div className="flex gap-x-5 xl:gap-x-10">
          <div className="nav-menu hidden lg:flex lg:items-center">
            <ul className="flex items-center gap-x-10">
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="border-b-primary text-xs text-white transition-all duration-100 hover:border-b-[3px] xl:text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
              {/* <div
              onClick={themeSwitch}
              className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-100 hover:bg-gray-800"
            >
              <IoSunny className="sun absolute text-xl text-white transition-all duration-200 group-hover:text-primary 2xl:text-2xl" />
              <IoMoon className="moon absolute text-xl text-white opacity-0 transition-all duration-200 group-hover:text-primary 2xl:text-2xl" />
            </div> */}
            </ul>
          </div>
          <div
            onClick={themeSwitch}
            className="group relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-100 hover:bg-gray-800"
          >
            <IoSunny className="sun absolute text-xl text-white transition-all duration-200 group-hover:text-primary 2xl:text-2xl" />
            <IoMoon className="moon absolute text-xl text-white opacity-0 transition-all duration-200 group-hover:text-primary 2xl:text-2xl" />
          </div>
          <button
            onClick={() => {
              toggleMenu();
            }}
            className="hamburger-logo lg:hidden"
          >
            <div className="hamburger-line origin-top-left transition duration-200"></div>
            <div className="hamburger-line transition duration-200"></div>
            <div className="hamburger-line origin-bottom-left transition duration-200"></div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-[37px] z-40 h-screen w-full origin-top bg-slate-100 text-black dark:bg-slate-800 dark:text-white"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-end gap-y-9 px-6 py-10 text-base font-bold md:text-lg"
            >
              {navLinks.map((link, index) => {
                return (
                  <div key={index} className="overflow-hidden">
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                      handleClickMenu={toggleMenu}
                    />
                  </div>
                );
              })}
              {/* <div className="relative flex h-8 w-8 cursor-pointer items-center justify-end rounded-full px-0">
                <IoSunny className="sun absolute text-2xl text-black" />
                <IoMoon className="moon absolute text-2xl text-black opacity-0" />
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.3, //0.5
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, href, handleClickMenu }) => {
  return (
    <motion.div variants={mobileLinkVars} className="flex items-center gap-x-2">
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          handleClickMenu();
          setTimeout(() => {
            window.location.href = e.target.href;
          }, 800);
        }}
      >
        {title}
      </a>
      <div className="h-1 w-1 rounded-full bg-black dark:bg-white md:h-2 md:w-2"></div>
    </motion.div>
  );
};
