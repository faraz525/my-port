import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  role: string,
  company: string,
  date : string,
  p1: string,
  p2: string,
  p3: string,
  p4: string,
  p5: string,
  picture: string,
}

function ExperinceCard(props: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-xy-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-start bg-[#292929] p-10 hover:opacity-100
    opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div 
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{once: true}}
        >
      
        <Image className='w-32 h-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]
        object-center' 
            src={props.picture}
            alt="Experince cards"
            width={500}
            height={500}
        />  
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>
          {props.role}
        </h4>
        <p className='font-bold text-2xl mt-1'>{props.company}</p>
        <div>
           {/*work section */}
        </div>
        <p className='uppercase py-5 text-gray-300'>{props.date}</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>{props.p1}
          </li>
          <li>{props.p2}
          </li>
          <li>{props.p3}
          </li>
          <li>{props.p4}
          </li>
          <li>{props.p5}
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperinceCard