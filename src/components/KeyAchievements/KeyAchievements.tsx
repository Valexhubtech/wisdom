const KeyAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Award of Honour — Southern Fest",
      description: "Recognized for outstanding graphics design and visual arts",
      location: "Cross River State",
      type: "Award"
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "Flutter Development",
      issuer: "Google"
    },
    {
      id: 2,
      title: "App Development Collaboration Course",
      issuer: "Google & Miss Angela"
    },
    {
      id: 3,
      title: "Python Programming",
      issuer: "Certificate"
    },
    {
      id: 4,
      title: "JavaScript Programming",
      issuer: "Certificate"
    },
    {
      id: 5,
      title: "Other relevant IT/Development courses",
      issuer: "Various"
    }
  ]

  return (
    <section id="achievements" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Achievements Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Achievements & Awards</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Awards Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 opacity-90">Awards</h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="border border-accent/20 rounded-lg p-6 bg-accent/5">
                  <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                  <p className="text-base opacity-80 mb-1">{achievement.description}</p>
                  <p className="text-sm opacity-60">{achievement.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 opacity-90">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-center py-3 border-b border-accent/10">
                  <h4 className="text-base font-medium">{cert.title}</h4>
                  <span className="text-sm opacity-70">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeyAchievements