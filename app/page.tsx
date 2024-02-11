import Image from 'next/image'
import Hero from '@/components/Hero'
import ThemeToggler from '@/components/ThemeToggler'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
    <main className='dark:bg-[240_10%_3.9%]' >
      <Navbar />
      <div className='max-w-[90%] md:max-w-[85%] mx-auto' >
        <Hero />
        <Skills />
        <ContactMe />
      </div>
    </main>
  )
}
