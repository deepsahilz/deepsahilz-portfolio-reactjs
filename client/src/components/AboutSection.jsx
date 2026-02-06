import React from 'react'

const AboutSection = () => {
  const tags = [
    "Passionate",
    "Digital Artist",
    "Hackathon Builder",

    "Full stack Dev",
    "Loves Music",
    "Freelancer",
    "Always Learning",
  ]

  return (
    <section className='font-neue w-full bg-zinc-200 min-h-screen text-zinc-800'>
      <div className='mx-auto px-5 md:px-10 py-20 md:py-32'>
        <div className='flex flex-col xl:flex-row justify-between gap-8 md:gap-30 items-start'>
          {/* Left Column - Header & Tags */}
          <div className='space-y-8'>
            <h1 className='text-7xl md:text-6xl lg:text-7xl lg:w-lg font-founders uppercase font-semibold text-zinc-800 leading-tight'>
              About me
            </h1>
            
            <div className='flex flex-wrap gap-2.5'>
              {tags.map((item, idx) => (
                <span 
                  key={idx} 
                  className='py-2 px-5 rounded-full border-1 border-zinc-700 text-sm md:text-base font-medium transition-all hover:bg-zinc-800 hover:text-zinc-100 cursor-default'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className='space-y-6 text-justify text-lg md:text-xl lg:text-2xl text-zinc-700 leading-relaxed'>
            <p>
              Hey, my name is <span className='font-semibold text-zinc-900'>Sahildeep Singh</span>, currently 22, from Punjab, India. I recently completed my graduation, and pursuing my masters. Most of what I know, I've learned through hands-on practice, reading docs, and asking the internet.
            </p>
            
            <p>
              I believe in <span className='font-semibold text-zinc-900'>learning by doing</span>. I've spent the past couple of years working on personal projects, hackathon builds, and random ideas that made me better at what I love, building stuff that's useful, creative, or just plain cool.
            </p>
            
            <p>
              I'm also into graphic design and digital art, with freelance experience in tools like Photoshop and Figma. Whether it's code or visuals, I like making things that serve a purpose and bring ideas to life. 
              <span className='block mt-4 font-semibold text-zinc-900'>
                Always learning, always building.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection