import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  return (
    // flex is to get it into flex mode, flex-col is so that it is on top of each other, flex-row is 
    // right next to each other. h-screen is setting the height for the screen.
    // md: is how I can get the framework to respond to different sorts of screen sizes
    // px- padding for the x direction 
    // py - padding for the y direction
    // justify is how you want to align an item in their axis
    // Absolute: Positioning an element outside of the flow that they typically would have
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center'>

        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.div
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        transition={{
            duration:1.2,
        }}
        viewport={{
            once: true,
        }}
        className="flex-shrink-0 mt-24"
        >

        <Image className='mt-24 md:-mb-20 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
  md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' 
            src="/headshot2.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
        />  
        </motion.div>
        
        <div className='space-y-10 px-0 md:px-10 overflow-y-auto max-h-screen'>
            <h4 className='text-4xl font-semibold'>Some <span className='underline 
            decoration-[#800080] mt-24'>background</span> about me!</h4>

            <p className='text-base'>
            Hi! 👋 My name is Faraz Qureshi and I am a social entrepreneur looking to use my skills in 
            problem solving, computer programming 💻, and leadership to help make a global 🌎 impact. 
            I have been tinkering with and creating since freshman year of high school through robotics 
            and a non-profit I formed to fight the stigma against students with special needs. Now, I have 
            been able to refine my programming knowledge through SWE internships and have been working on my 
            company cledge - looking to democratize the college advising space - for the past year. Scroll 
            down to learn more about my journey 🛤️ and contact me!
            </p>
        </div>
        
        

        
        
    </div>
  )
}

export default About