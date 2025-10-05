import Image from 'next/image'
import { HeroImage } from '@/utils/images'

const Hero = () => {
  return (
    <section id="home" className="h-screen pt-16 border-b border-accent">
      <div className="max-w-6xl mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="font-bold mb-6">
              <span className="text-4xl md:text-5xl">I'm</span> <br />
              <span className="text-8xl md:text-9xl">Wisdom</span> <br />
              <span className="text-6xl md:text-7xl">D. Edet</span>
            </h1>
            <p className="text-xl opacity-80 mb-5">A Software Engineer | Visual Innovator | Founder</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 border border-accent rounded hover:bg-accent hover:text-primary transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-accent text-primary rounded hover:opacity-80 transition-opacity"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end h-full pt-[30px]">
            <div className="h-full w-full flex items-end">
              <Image
                src={HeroImage}
                alt="Wisdom Dominic - Software Engineer"
                width={600}
                height={0}
                className="object-contain object-bottom w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero