import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return ( 
  <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20
  xl:items-center'>

    <motion.div 
    initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex flex-row items-center'
    >
        {/* Social Icons */}
        <SocialIcon 
        url="https://www.instagram.com/faraz525/" 
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon url="https://www.linkedin.com/in/faraz525/" 
        fgColor='gray'
        bgColor='transparent'/>
        <SocialIcon url="https://github.com/faraz525" 
        fgColor='gray'
        bgColor='transparent'/>
    </motion.div>
    {/* contact box */}
    <motion.div 
    initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
    }}
    animate={{
        x: 0,
        opacity: 1,
        scale: 1,
    }}
    transition={{
        duration:1.5,
    }}
    className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <a href='#contact'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get in Touch</p>
        </a>
    </motion.div>
  </header>
  )
}