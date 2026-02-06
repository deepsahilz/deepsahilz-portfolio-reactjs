import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show / hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [menuOpen]);

  // 🔥 SCROLL FUNCTION
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 flex justify-center backdrop-blur-md lg:backdrop-blur-none bg-white/30 lg:bg-transparent w-full z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="rounded-b-xl w-full">
          <div
            className={`flex justify-between items-center py-3 md:py-5 px-6 md:px-10 transition-all duration-300 ${
              menuOpen ? "bg-white" : ""
            }`}
          >
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className={`font-bold overflow-hidden relative h-7 cursor-pointer text-2xl font-neue ${
                menuOpen ? "text-zinc-900" : "md:mix-blend-difference"
              }`}
            >
              <span className="block transition-transform duration-300 hover:-translate-y-full">
                <span className="block">deepsahilz</span>
                <span className="block absolute left-0 top-full">
                  deepsahilz
                </span>
              </span>
            </div>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex gap-5 uppercase md:mix-blend-difference">
              {navLinks.map((item, i) => (
                <li
                  key={i}
                  onClick={() => scrollToSection(item.id)}
                  className="overflow-hidden relative h-6 cursor-pointer hover:opacity-70"
                >
                  <span className="block text-lg transition-transform duration-300 hover:-translate-y-full">
                    <span className="block">{item.label}</span>
                    <span className="block absolute left-0 top-full">
                      {item.label}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* HAMBURGER */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl w-8 h-8 flex items-center justify-center text-zinc-900"
              >
                {menuOpen ? "×" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed  inset-0 bg-white z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`flex flex-col justify-center items-center h-full transition-all duration-500 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-8 uppercase text-center">
            {navLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="text-5xl font-founders font-semibold text-zinc-900 cursor-pointer hover:text-zinc-600"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <p className="text-zinc-500 text-sm">GET IN TOUCH</p>
            <a
              href="mailto:deepsahil.online@gmail.com"
              className="text-lg text-zinc-900 hover:text-zinc-600"
            >
              deepsahil.online@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
