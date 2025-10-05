import Image from 'next/image'
import { HeroImage } from '@/utils/images'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen md:h-screen pt-16 border-b border-accent">
      <div className="max-w-6xl mx-auto px-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-full gap-4 md:gap-0">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-0">
            <h1 className="font-bold mb-4 md:mb-6">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">I'm</span> <br />
              <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl">Wisdom</span> <br />
              <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">D. Edet</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-80 mb-4 md:mb-5">A Software Engineer | Visual Innovator | Founder</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base border border-accent rounded hover:bg-accent hover:text-primary transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-accent text-primary rounded hover:opacity-80 transition-opacity"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end h-full pt-[30px] md:order-last">
            <div className="h-full w-full max-w-sm md:max-w-none flex items-end">
              <Image
                src={HeroImage}
                alt="Wisdom Dominic - Software Engineer"
                width={600}
                height={0}
                className="object-contain object-bottom w-full h-auto max-h-full"
                priority
                style={{ maxHeight: 'calc(100vh - 8rem)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero