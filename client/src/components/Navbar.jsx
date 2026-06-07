import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [hoveredLink, setHoveredLink] = useState(null);

  // Show / hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentY = window.scrollY;
      // Show navbar if scrolling up, or near top
      setShowNavbar(currentY < lastScrollY || currentY < 20);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  // Set active link based on pathname
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname.startsWith("/work")) {
      setActiveLink("work");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    } else if (location.pathname === "/contact") {
      setActiveLink("contact");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Nav click handler
  const handleNavClick = (id) => {
    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (id === "work") {
      if (location.pathname !== "/work") {
        navigate("/work");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (id === "about") {
      if (location.pathname !== "/about") {
        navigate("/about");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (id === "contact") {
      if (location.pathname !== "/contact") {
        navigate("/contact");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div
        layout
        // className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-28 opacity-0 pointer-events-none"
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/80 shadow-lg flex transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-28 opacity-0 pointer-events-none"
          } ${menuOpen
            ? "w-[calc(100%-2rem)] max-w-sm rounded-2xl flex-col p-4"
            : "w-[calc(100%-2rem)] md:w-auto rounded-full py-2 px-3 md:py-2.5 md:px-7 flex-row items-center justify-between"
          }`}
      >
        {/* HEADER BAR (Logo + Controls) */}
        <div className={`flex items-center justify-between w-full ${menuOpen ? "mb-4" : ""}`}>
          {/* LOGO */}
          <div
            onClick={() => handleNavClick("home")}
            className="font-bold cursor-pointer text-xl font-neue text-zinc-100 flex items-center select-none"
          >
            <span className="relative overflow-hidden h-7 block">
              <span className="block transition-transform duration-300 hover:-translate-y-full">
                <span className="block">deepsahilz</span>
                <span className="block absolute left-0 top-full">
                  deepsahilz
                </span>
              </span>
            </span>
            {/* <span className="text-[#9f4] ml-0.5">•</span> */}
          </div>

          {/* DESKTOP NAV */}
          {!menuOpen && (
            <div className="hidden md:flex items-center gap-2 pl-20">
              <ul className="flex items-center gap-1">
                {navLinks.map((item) => {
                  const isActive = activeLink === item.id;
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      onMouseEnter={() => setHoveredLink(item.id)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative px-3.5 py-1.5 cursor-pointer text-xs font-neue uppercase font-medium tracking-wider text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                    >
                      <span className="relative z-10">{item.label}</span>

                      {/* Sliding hover pill */}
                      {hoveredLink === item.id && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-zinc-800/60 rounded-full -z-0"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 25,
                          }}
                        />
                      )}

                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.span
                          layoutId="active-indicator"
                          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9f4]"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* MOBILE / EXPAND MENU TOGGLE */}
          <div className={`${menuOpen ? "block" : "md:hidden"} z-50`}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE EXPANDED MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col px-2 pb-2 mt-2 w-full overflow-hidden"
            >
              <ul className="flex flex-col gap-3 mb-6">
                {navLinks.map((item, i) => (
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-3xl font-founders font-semibold uppercase tracking-wider cursor-pointer hover:text-[#9f4] transition-colors py-1 ${activeLink === item.id ? "text-[#9f4]" : "text-zinc-100"
                      }`}
                  >
                    {item.label}
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Contacts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="border-t border-zinc-800/80 pt-4"
              >
                <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-1">
                  Get in touch
                </span>
                <a
                  href="mailto:deepsahil.online@gmail.com"
                  className="text-zinc-300 hover:text-[#9f4] transition-colors font-neue text-sm break-all"
                >
                  deepsahil.online@gmail.com
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Dim overlay when mobile menu is open to focus attention */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
