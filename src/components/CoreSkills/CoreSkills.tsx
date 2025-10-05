const CoreSkills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      skills: ["Flutter", "Dart", "JavaScript", "TypeScript", "React", "Next.js", "PHP", "Laravel", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Software Engineering", 
      skills: ["Full-stack development", "App & web systems", "API integration", "E-commerce solutions", "Cybersecurity (basic)", "Networking fundamentals"]
    },
    {
      title: "Creative Tools",
      skills: ["Video Editing: Sony Vegas, Premiere Pro, CamCut, After Effects", "Cinematography & Photography: Canon, Sony", "Visual Design: Adobe XD, Figma, CorelDRAW, Photoshop, Illustrator (Basics), Canva"]
    },
    {
      title: "Professional Skills",
      skills: ["Team leadership", "Innovation", "Communication", "Project management"]
    }
  ]

  return (
    <section id="skills" className=" pt-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Core Skills Section */}
        <div>
          {/* Mobile: Title on top */}
          <div className="block md:hidden mb-6">
            <h2 className="text-2xl font-bold">Core Skills</h2>
          </div>
          
          <div className="flex items-center gap-8">
            {/* Desktop: Rotated Core Skills text */}
            <div className="hidden md:flex flex-shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold -rotate-90 origin-center whitespace-nowrap">
                Core Skills
              </h2>
            </div>
            
            {/* Skills content */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg md:text-xl font-semibold opacity-90">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 text-sm bg-accent/10 border border-accent/20 rounded-full opacity-80 hover:opacity-100 transition-opacity"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreSkills