const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Pre-Degree Program",
      institution: "University of Calabar",
      year: "2019",
      type: "Foundation"
    },
    {
      id: 2,
      degree: "B.Sc. Computer Science",
      institution: "INSTITUT DES HAUTES ETUDES DE RELATIONS INTERNATIONALES ET STRATEGIQUES",
      year: "2023",
      type: "Bachelor's Degree"
    },
    {
      id: 3,
      degree: "Diploma in Computer Science",
      institution: "Institute of Marine and Technology",
      year: "2024",
      type: "Diploma"
    }
  ]

  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Education Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
        
        {/* Education List */}
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="border border-accent/20 rounded-lg p-6 bg-accent/5 hover:bg-accent/10 transition-colors">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Left - Degree and Type */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">{edu.degree}</h3>
                  <span className="text-sm px-2 py-1 bg-accent/20 rounded text-accent font-medium">
                    {edu.type}
                  </span>
                </div>
                
                {/* Center - Institution */}
                <div className="md:col-span-1">
                  <h4 className="text-base md:text-lg font-semibold opacity-90">
                    {edu.institution}
                  </h4>
                </div>
                
                {/* Right - Year */}
                <div className="text-right">
                  <span className="text-lg font-bold text-accent">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education