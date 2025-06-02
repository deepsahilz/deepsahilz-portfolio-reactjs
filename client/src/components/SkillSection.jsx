import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiGreensock,SiFigma } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500 " />, name: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiExpress className="text-black" />, name: 'Express' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
  { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind' },
  { icon: <SiGreensock className="text-green-400" />, name: 'GSAP' },
]

const others = [
  { icon: <FaGithub className="text-zinc-800" />, name: 'GitHub' },
  { icon: <FaHtml5 className="text-orange-500" />, name: 'C/C++' },
  { icon: <FaCss3Alt className="text-blue-500 " />, name: 'Photoshop' },
  { icon: <FaFigma className="text-yellow-400" />, name: 'Figma' },
]

const pastelColors = [
  "#FFB3BA", "#BAFFC9", "#BAE1FF", "#FFF0BA",
  "#D5BAFF", "#FFDAC1", "#BAFFF0", "#E3BAFF"
];

const SkillCard = ({skill})=>{
  return(
    <div  className="flex bg-blue-100  flex-col border py-2 md:py-4 px-4 md:px-7 rounded-2xl hover:scale-90 transition-transform duration-400 border-zinc-400 text-2xl md:text-5xl items-center">
      {skill.icon}
      <span className="mt-2 text-zinc-700 text-sm md:text-lg font-medium">{skill.name}</span>
    </div>
  )
}


const SkillSection = () => {
  return (
    <div className='bg-zinc-200  flex  justify-between px-6 md:px-10 py-20 '>
      <div className=''>
        <h1 className='text-3xl md:text-3xl font-semibold text-zinc-800 bg-[#9f0] inline-block'>
          Things I’m<br className='md:hidden'/> goooood at
        </h1>

        <div className='mt-12 '>
          <h1 className='mb-5 text-xl font-semibold text-zinc-500 '>Web technologies and tools</h1>
          <div className=" flex gap-4 md:gap-4 flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className='flex items-center'>
              <div className="flex bg-zinc-100  flex-col border py-2 md:py-4 px-4 md:px-7 rounded-2xl hover:scale-90 transition-transform duration-400 border-zinc-400 text-2xl md:text-5xl items-center">
                {skill.icon}
                <span className="mt-2 text-zinc-700  text-sm md:text-lg font-medium">{skill.name}</span>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-12 '>
          <h1 className='mb-5 text-xl font-semibold text-zinc-500 '>Others</h1>
          <div className=" flex gap-4 flex-wrap">
            {others.map((skill, index) => (
              <div key={index} className='flex items-center'>
              <div className="flex bg-zinc-100  flex-col border py-2 md:py-4 px-4 md:px-7 rounded-2xl hover:scale-90 transition-transform duration-400 border-zinc-400 text-2xl md:text-5xl items-center">
                {skill.icon}
                <span className="mt-2 text-zinc-700  text-sm md:text-lg font-medium">{skill.name}</span>
              </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillSection
