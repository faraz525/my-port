import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackGroundCircle from './BackGroundCircle';
import Image from 'next/image'
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Faraz Qureshi",
            "Passionate about technology and business",
            "Open for oppurtunities"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'>
        <div className='z-0'>
            <BackGroundCircle/>
        </div>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src="/../public/Headshot.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[7px] p-5'>
                Entrepreneur | Software Engineer | Product Manager
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px10'>
                <span>{text}</span>
                <Cursor cursorColor='purple'/>    
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About </button>
                </Link>

                <Link href="#experince">
                    <button className='heroButton'>Experince</button>
                </Link>

                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>

                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}