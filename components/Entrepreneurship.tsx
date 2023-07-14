import { motion } from 'framer-motion'
import React from 'react'
import ExperinceCard from './ExperinceCard'


type Props = {}

// Margin is to move an element around the screen as it the object with the 
// other portions of the screen 
// Padding on the other hand is the spacing internaly of the element
const Entrepreneurship = (props: Props) => {
    const internships = [
        {
          role: 'Co-Founder & CTO',
          company: 'Cledge',
          date: 'December 2020 – Current',
          p1: 'Launched Cledge to tackle inequity in the college consulting industry and revolutionize college advising.',
          p2: 'Won #1 at Dempsey Startup Competition, Microsoft for Startups company, IBM Startups, and MassChallange accelerator, reaching a community of 2,000+ parents/students.',
          p3: 'Directed and collaborated with a team of 12 developers to develop web solutions using Typescript, React, NextJS, and MongoDB',
          p4: 'Involved in agile framework, design specification, tech integration, product review, and go to market pipeline.',
          picture: '/cledge.png',
        },
        {
            role: 'Co-Founder & CTO',
            company: 'Aware Non-profit',
            date: 'September 2018 – September 2020',
            p1: 'Helped found a non-profit to fight the stigma against students with special needs via high school chapters',
            p2: 'Raised $35,000 in funding, recognized from T-Mobile, Ashoka Her Lead Fellowship, and more for our work.',
            p3: 'Created website for an online presence and was able to reach over 8,000 individuals from Oregon to Florida',
            picture: '/aware.jpeg',
          },
      ]
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
        className='h-screen flex relative flex-col text-lft
        max-w-full justify-evenly mx-auto items-center overflow-hidden md:px-10'>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl mb-5 mt-24'>Startups</h3>

            <div className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#800080]/80 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                {internships.map((internship, index) => (
                    <ExperinceCard key={index} {...internship} />
                ))}
            </div>
    </motion.div>

    
  )
}

export default Entrepreneurship