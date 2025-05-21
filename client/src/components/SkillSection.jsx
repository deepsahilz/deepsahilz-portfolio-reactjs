import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiGreensock } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500 " />, name: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
  { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
  { icon: <SiExpress className="text-black" />, name: 'Express' },
  { icon: <FaGithub className="text-zinc-800" />, name: 'GitHub' },
  { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind' },
  { icon: <SiGreensock className="text-green-400" />, name: 'GSAP' },
]

const SkillSection = () => {
  return (
    <div className='bg-zinc-50 flex  justify-between px-6 md:px-10 py-20 min-h-screen'>
      <div className='mt-18'>
        <h1 className='text-3xl md:text-4xl font-semibold text-zinc-800 bg-[#9f0] inline-block'>
          Things I’m<br className='md:hidden'/> goooood at
        </h1>

        <div className="mt-18 flex gap-4 md:gap-8 flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className="flex  flex-col border      py-2 md:py-4 px-4 md:px-8 rounded-2xl hover:scale-90 transition-transform duration-400 border-zinc-400 text-2xl md:text-7xl items-center">
              {skill.icon}
              <span className="mt-2 text-zinc-700 text-sm md:text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillSection
