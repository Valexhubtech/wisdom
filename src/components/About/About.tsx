import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="pb-4  ">
      <div className="max-w-6xl mx-auto px-4 h-full">
        {/* About Me Section */}
        <div className="mb-8">
          {/* Mobile: Title on top */}
          <div className="block md:hidden mb-6">
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          
          <div className="flex items-center gap-8">
            {/* Desktop: Rotated About Me text */}
            <div className="hidden md:flex flex-shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold -rotate-90 origin-center whitespace-nowrap">
                About Me
              </h2>
            </div>
            
            {/* About content */}
            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed opacity-80">
                Creative and versatile Software Engineer and two-time founder with a strong foundation in software development, 
                app/web systems, visual arts, and leadership. A decade of experience spanning software engineering, 
                app/web development, cinematography, and graphics design. Passionate about blending technology with creativity 
                to bring visionary ideas into execution.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-3xl md:text-4xl font-bold">10</h3>
                <p className="text-sm md:text-base opacity-70">Years of<br/>Experience</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-3xl md:text-4xl font-bold">100+</h3>
                <p className="text-sm md:text-base opacity-70">Projects</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <h3 className="text-3xl md:text-4xl font-bold">46</h3>
                <p className="text-sm md:text-base opacity-70">Clients</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <Image src="https://resume-getnextjs-template.vercel.app/images/icon/lang-icon.svg" alt="Language" width={24} height={24} className="flex-shrink-0" />
                <p className="text-sm md:text-base opacity-70">English, Efik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About