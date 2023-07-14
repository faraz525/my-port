import { motion } from 'framer-motion'
import React from 'react'
import ExperinceCard from './ExperinceCard'


type Props = {}

// Margin is to move an element around the screen as it the object with the 
// other portions of the screen 
// Padding on the other hand is the spacing internaly of the element
const WorkExperince = (props: Props) => {
    const internships = [
        {
          role: 'Software Engineering Intern',
          company: 'Tesla',
          date: 'September 2023 – December 2023',
          p1: 'Designed and developing robust back-end systems and data pipelines for Tesla’s high-performance platform.',
          p2: 'Applied principles of distributed computing to optimize data delivery in near real-time.',
          picture: '/tesla_logo_PNG19.png',
        },
        {
          role: 'Software Development Engineer Intern',
          company: 'Amazon, AWS',
          date: 'September 2022 – December 2022',
          p1: 'Spearheaded the establishment of proactive cluster health monitoring solutions to minimize customer issue and expedite debugging.',
          p2: 'Utilized Java and Spark to handle large datasets, improving the robustness and reliability of AWS services.',
          p3: 'Improved developer experience by creating a tool for on-demand cluster health visualization.',
          picture: '/aws.png',
        },
        {
            role: 'Software Data Engineer Intern',
            company: 'Capital One',
            date: 'June 2023 – September 2023',
            p1: 'Built an automated data validation process using CloudWatch and Lambda, ensuring data integrity and consistency.',
            p2: 'Developed a high-performance Python library for parsing, optimizing indexing and comparison with a Trie data structure.',
            p3: 'Contributed to the development of a customer-facing UI tool using React, empowering users to report their data preferences.',
            picture: '/c12.jpeg',
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
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl mb-5 mt-24'>Experince</h3>

            <div className='scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#800080]/80 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
                {internships.map((internship, index) => (
                    <ExperinceCard key={index} {...internship} />
                ))}
            </div>
    </motion.div>

    
  )
}

export default WorkExperince