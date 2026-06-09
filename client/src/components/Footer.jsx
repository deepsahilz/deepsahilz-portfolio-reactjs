import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { MdContentCopy, MdCheck } from 'react-icons/md'

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState("")

  // Dynamic timezone clock for IST (Punjab, India)
  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
      try {
        const formatter = new Intl.DateTimeFormat("en-US", options)
        setLocalTime(formatter.format(new Date()))
      } catch (e) {
        setLocalTime(new Date().toLocaleTimeString("en-US", options))
      }
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText("deepsahil.online@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleNavClick = (id) => {
    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/")
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else if (id === "work") {
      if (location.pathname !== "/work") {
        navigate("/work")
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else if (id === "about") {
      if (location.pathname !== "/about") {
        navigate("/about")
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else if (id === "contact") {
      if (location.pathname !== "/contact") {
        navigate("/contact")
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  return (
    <footer id="contact" className="w-full bg-zinc-950 text-zinc-100 font-neue">
      <div className="mx-auto px-6 md:px-10 py-16 md:py-20">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">

          {/* Brand Info (Col span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Logo */}
              <div
                onClick={() => handleNavClick("home")}
                className="text-5xl lg:text-6xl font-founders font-bold    cursor-pointer select-none text-zinc-100 mb-4 hover:opacity-85 transition-opacity"
              >
                <span className='font-neue text-5xl mr-1'>@</span>deepsahilz
              </div>

              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2.5 bg-zinc-900 border border-zinc-800/80 rounded-full px-4 py-1.5 text-[11px] font-medium tracking-wider text-zinc-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9f4] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9f4]"></span>
                </span>
                <span>AVAILABLE FOR FREELANCE & COLLABS</span>
              </div>

              <p className="text-sm md:text-base text-zinc-400 max-w-sm leading-relaxed">
                Crafting modern, high-performance web applications and digital design experiences. Focused on utility and clean aesthetics.
              </p>
            </div>
          </div>

          {/* Links Columns (Col span 4 - split into Sitemap and Connect) */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            {/* Sitemap Column */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
                Sitemap
              </h3>
              <ul className="flex flex-col gap-3">
                {["home", "work", "about", "contact"].map((id) => (
                  <li key={id}>
                    <button
                      onClick={() => handleNavClick(id)}
                      className="text-zinc-400 hover:text-[#9f4] text-base transition-colors duration-200 capitalize text-left cursor-pointer font-medium"
                    >
                      {id}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-5">
                Connect
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="https://github.com/deepsahilz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#9f4] text-base transition-colors duration-200 font-medium"
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sahil-singh-0421b7275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#9f4] text-base transition-colors duration-200 font-medium"
                  >
                    <FaLinkedin className="text-lg" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card (Col span 3) */}
          <div className="hidden md:flex md:col-span-3">
            <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-5 hover:border-zinc-800 transition-all duration-350 flex flex-col justify-between h-full group">
              <div className="mb-6">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block mb-2">
                  Let's work
                </span>
                <p className="text-lg font-semibold text-zinc-200 leading-snug group-hover:text-zinc-100 transition-colors">
                  Have an idea in mind? Let's build it together.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                  Direct Email
                </div>
                <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-900 rounded-xl p-2.5 transition-all">
                  <span className="text-xs text-zinc-300 font-medium truncate select-all flex-1 pr-1">
                    deepsahil.online@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 flex items-center justify-center transition-all cursor-pointer focus:outline-none flex-shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <MdCheck className="text-emerald-500 text-sm" />
                    ) : (
                      <MdContentCopy className="text-sm" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Utility Bar */}
        <div className="border-t border-zinc-900/80 mt-16  pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Copyright */}
          <div className="text-xs md:text-sm text-zinc-500 text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} Sahildeep Singh. All rights reserved.
          </div>

          {/* Timezone clock */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-450 font-medium bg-zinc-900/40 border border-zinc-900/60 rounded-full px-4 py-1.5 select-none">
            <span className="text-zinc-500">PUNJAB, IN</span>
            <span className="text-zinc-700 font-bold">•</span>
            <span className="font-mono text-[#9f4]">{localTime || "00:00:00 AM"}</span>
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">IST</span>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-400 hover:text-zinc-100 bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 rounded-full px-4 py-1.5 transition-all duration-200 hover:scale-105 group cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>

        </div>
      </div>
    </footer>
  )
}

export default Footer