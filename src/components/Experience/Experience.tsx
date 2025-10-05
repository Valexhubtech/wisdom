const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "ValexHub Technologies",
      position: "Founder & Senior Software Developer / Director",
      period: "2022 – Present",
      location: "FCT Abuja Nigeria",
      responsibilities: [
        "Founded and scaled a technology solutions company delivering web and mobile applications.",
        "Led development of e-commerce platforms, booking systems, NGO support systems, and school management solutions.",
        "Directed a cross-functional team of developers and designers, improving delivery speed and quality.",
        "Oversaw strategy, client acquisition, and innovation."
      ]
    },
    {
      id: 2,
      company: "Dreamweave Studio & Entertainment",
      position: "Founder & Senior Lead Cinematographer / Graphics Designer",
      period: "2019 - 2020",
      location: "Cross River State, Calabar, Nigeria",
      responsibilities: [
        "Co-founded and managed a creative studio specializing in cinematography, graphics design, and entertainment.",
        "Delivered visual solutions for clients across industries.",
        "Directed impactful visual campaigns, growing the studio's client base."
      ]
    },
    {
      id: 3,
      company: "Material Images",
      position: "Senior Video Editor & Cinematographer",
      period: "2017 – 2020",
      location: "Cross River State, Calabar, Nigeria",
      responsibilities: [
        "Produced and edited video projects for clients over 4–5 years.",
        "Created high-quality visual content, strengthening brand visibility.",
        "Mentored junior editors, raising team performance."
      ]
    }
  ]

  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Experience Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Experience</h2>
        
        {/* Timeline content */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/30"></div>
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-12 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-2 top-2 w-4 h-4 bg-accent rounded-full border-4 border-primary"></div>
              
              {/* Content */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left side - Company, Period, Location */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.company}</h3>
                  <div className="space-y-1 text-sm md:text-base opacity-70">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                
                {/* Right side - Position and Responsibilities */}
                <div>
                  <h4 className="text-lg md:text-xl font-semibold mb-3 opacity-90">{exp.position}</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-base md:text-lg opacity-80 flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience