import React from 'react'

const AboutSection = () => {
  return (
    <>
      <div className=' font-neue  w-full bg-zinc-200 min-h-screen text-zinc-800  md:flex md:justify-between pt-30 px-5 md:px-10'>
        <div>
          <h1 className='text-3xl md:text-6xl mb-5  font-nb font-semibold text-zinc-800 inline-block'>
            About me
          </h1>
          {/* <div className='w-[15rem] h-[15rem] rounded-lg overflow-hidden'>
            <img className='w-full h-full object-cover' src='../src/assets/images/sahil2.jpg'/>
          </div> */}
          <div className='flex flex-wrap gap-3  max-w-[90%]'>
            {["Passionate","Digital Artist","Coder","Developer","Lazy","loves music","Freelancer" ].map((item,idx)=>(
              <div key={idx} className='py-1 px-4  rounded-full border border-zinc-700 text-lg'>{item}</div>
            ))}
          </div>
        </div>
          <div>

          <div className='text-lg md:text-2xl  mb-20 max-w-[50rem]  text-justify  mt-5 flex flex-col gap-4'>
            <p>Hey, my name is Sahildeep Singh, currently 21, from Punjab, India. I recently completed my graduation, and most of what I know, I’ve learned through hands-on practice, reading docs, and asking the internet.</p>
            
            <p>I believe in learning by doing. I’ve spent the past couple of years working on personal projects, hackathon builds, and random ideas that made me better at what I love—building stuff that’s useful, creative, or just plain cool.</p> 
          <div className='hidden  gap-3 mt-10'>
            {["Passionate","Artist","Coder"].map((item,idx)=>(
              <div key={idx} className='py-1 px-4  rounded-full border border-zinc-700 text-lg'>{item}</div>
            ))}
          </div>
            <p>I’m also into graphic design and digital art, with freelance experience in tools like Photoshop and Figma.  Whether it's code or visuals, I like making things that serve a purpose and bring ideas to life. Always learning, always building.</p>
            
          </div>
          
          </div>
      </div>
      {/* <div className=' font-neue mt-14 w-full bg-zinc-200 text-zinc-800  md:flex md:justify-between px-5 md:px-10 pb-20'>
          <h1 className='text-3xl md:text-7xl mb-5 font-founders uppercase  font-semibold text-zinc-800 inline-block'>
            Achievements
          </h1>

          <div className='text-2xl md:text-2xl max-w-[50rem] text-justify  flex flex-col gap-4'>
            <p>Top 10 finalist at IIT roorkee's cognizance techfest -- built saas app "paycraft" , an app which solves the trust issues between freelancers and client by introducing a milestone based payment system</p>
          </div>
          
      </div> */}
    </>
  )
}

export default AboutSection