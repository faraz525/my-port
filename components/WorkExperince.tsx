import { motion } from 'framer-motion'
import React from 'react'
import ExperinceCard from './ExperinceCard'


type Props = {}

// Margin is to move an element around the screen as it the object with the 
// other portions of the screen 
// Padding on the other hand is the spacing internaly of the element
const WorkExperince = (props: Props) => {
  return (
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
        once: true
    }}
    className='h-screen flex relative flex-col text-lft md:flex-row 
    max-w-full justify-evenly mx-auto items-center overflow-hidden px-10'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experince</h3>

        <div className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#800080]/80 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperinceCard role={'Co-Founder & CEO'} company={'Cledge'} date={''} p1={''} p2={''} p3={''} p4={''} p5={''} picture={'/../public/headshot2.jpeg'} />
            <ExperinceCard role={''} company={''} date={''} p1={''} p2={''} p3={''} p4={''} p5={''} picture={''} />
            <ExperinceCard role={''} company={''} date={''} p1={''} p2={''} p3={''} p4={''} p5={''} picture={''} />
            <ExperinceCard role={''} company={''} date={''} p1={''} p2={''} p3={''} p4={''} p5={''} picture={''} />
        </div>
    </motion.div>
    
  )
}

export default WorkExperince