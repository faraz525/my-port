import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperince from '../components/WorkExperince'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import Entrepreneurship from '../components/Entrepreneurship'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    z-0 scroll-smooth overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#800080]/80'>

    
      <Head>
        <title>Faraz's portfolio</title>
        <meta name="description" content="Faraz's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* section */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experince" className='snap-center'>
        <WorkExperince />
      </section>

      <section id="entrepreneurship" className='snap-center'>
        <Entrepreneurship />
      </section>

      {/* <section id="skills" className='snap-start'>
        <Skills />
      </section> */}

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div>
            <HomeIcon className='h-10 w-10 mx-auto hover:text-[#800080]'/>
          </div>
        </footer>
      </Link>
    </div>
    </>
  )
}
