import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiGreensock, SiCplusplus } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { SiSupabase } from 'react-icons/si'

const SiAdobephotoshop = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={props.className} 
    style={{ width: '1em', height: '1em', ...props.style }}
  >
    <path d="M0 0v24h24V0H0zm10.74 15.22c0 1.25-.32 2.21-.97 2.87-.64.67-1.57.99-2.77.99-1.22 0-2.15-.31-2.78-.92-.63-.61-.95-1.55-.95-2.83V9h2.36v6.23c0 .63.13 1.07.4 1.34.26.26.65.39 1.15.39.52 0 .91-.13 1.18-.39.26-.26.39-.7.39-1.34V9h2.38v6.22c-.01.01-.01.01-.01.01zM19 14.18c0 .87-.27 1.55-.8 2.05s-1.28.75-2.22.75c-.88 0-1.57-.14-2.09-.43v-2c.62.43 1.32.65 2.11.65.68 0 1-.22 1-.65 0-.17-.07-.31-.22-.43-.14-.12-.49-.28-1.04-.49-1-.38-1.68-.78-2.05-1.19-.36-.41-.54-.97-.54-1.69 0-.79.27-1.42.8-1.9s1.25-.72 2.15-.72c.81 0 1.48.14 2 .42l-.56 1.83c-.5-.27-1.05-.41-1.63-.41-.54 0-.82.17-.82.5 0 .15.06.27.19.38.13.11.45.24.96.42 1.05.39 1.77.81 2.16 1.25.39.43.59 1.02.59 1.76z" />
  </svg>
)

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML', category: 'frontend' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS', category: 'frontend' },
  { icon: <SiNextdotjs className="text-zinc-800" />, name: 'Next.js', category: 'frontend' },
  { icon: <SiSupabase className="text-green-500" />, name: 'Supabase', category: 'backend' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript', category: 'frontend' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React', category: 'frontend' },
  { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind', category: 'frontend' },
  { icon: <SiGreensock className="text-green-400" />, name: 'GSAP', category: 'frontend' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js', category: 'backend' },
  { icon: <SiExpress className="text-zinc-700" />, name: 'Express', category: 'backend' },
  { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB', category: 'backend' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL', category: 'backend' },
  { icon: <FaFigma className="text-purple-500" />, name: 'Figma', category: 'design' },
  { icon: <SiAdobephotoshop className="text-blue-600" />, name: 'Photoshop', category: 'design' },
  { icon: <FaGithub className="text-zinc-800" />, name: 'GitHub', category: 'tools' },
  { icon: <SiCplusplus className="text-blue-700" />, name: 'C++', category: 'tools' },
]

const SkillCard = ({ skill }) => {
  return (
    <div className='flex items-center gap-3 bg-white border-2 py-2.5 px-4 md:py-3 md:px-5 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 border-zinc-300 group cursor-default'>
      <div className="text-xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <span className="text-zinc-700 text-sm md:text-base font-medium whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  )
}

const SkillSection = () => {
  return (
    <section className='bg-zinc-100 min-h-screen px-5 md:px-10 py-20 md:py-28'>
      <div className=' mx-auto'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-800 uppercase font-founders  mb-12 md:mb-16'>
          What I build with
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        <p className='mt-10 md:mt-12 text-zinc-500 text-sm md:text-base max-w-2xl'>
         Full-stack developer with a strong eye for design. I build complete web applications from database to UI, and enjoy creating visual designs that bring ideas to life.</p>
      </div>
    </section>
  )
}

export default SkillSection