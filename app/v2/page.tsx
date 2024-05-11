import Image from 'next/image'
import Hero from '@/components/Hero'
import ThemeToggler from '@/components/ThemeToggler'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import ContactMe from '@/components/ContactMe'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'

export default function V2(){
    return(
        <div className='dark:bg-[240_10%_3.9%] pb-20 font-poppins' >
        <Navbar />
        {/* <div className='max-w-[90%] md:max-w-[85%] mx-auto' > */}
        <div className='max-w-[1440px] xl:px-16 px-[5%] mx-auto' >
          <Hero />
          <Skills />
          <Projects />
          <AboutMe />
          <div className='max-w-2xl mx-auto' >
            <h2 className="text-3xl mb-4 text-center" >Contact Me</h2>
            <ContactMe />
          </div>
        </div>
      </div>
    )
}