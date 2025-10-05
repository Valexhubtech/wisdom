const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      impact: "Complete e-commerce solution",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Hotel & Apartment Booking (Aamiq Space)",
      description: "Deployed to 2 clients, processing ₦1–2M in transactions",
      impact: "₦1-2M in transactions",
      category: "Hospitality",
      website: "https://aamiqspace.com"
    },
    {
      id: 3,
      title: "Unified Booking & Restaurant System (House of Card)",
      description: "Generated ₦20M+ in revenue within 6 months; cut booking time by enabling direct in-room meal orders routed to the right department",
      impact: "₦20M+ revenue in 6 months",
      category: "Hospitality",
      website: "https://houseofcard.org"
    },
    {
      id: 4,
      title: "SSI NGO Support System",
      description: "Empowered 300+ individuals through women/youth training, sports events, and civic engagement",
      impact: "300+ individuals empowered",
      category: "Non-profit",
      website: "https://ssisupportsystem.com.ng"
    },
    {
      id: 5,
      title: "School Management System (IMT)",
      description: "Multi-portal (admin, lecturer, student) with role-based access",
      impact: "Multi-portal access system",
      category: "Education",
      website: "https://imtnigeria.ng"
    },
    {
      id: 6,
      title: "Showcon",
      description: "OTP streaming service platform for streaming movies with yourself and your friends",
      impact: "Social streaming platform",
      category: "Entertainment",
      website: "http://showcon.ng"
    },
    {
      id: 7,
      title: "Alvora",
      description: "Virtual office space developed in conjunction with Valex Hub",
      impact: "Virtual workspace solution",
      category: "Workspace",
      website: "https://alvora.ng"
    },
    {
      id: 8,
      title: "Valex Hub Admin Management System",
      description: "Managing campaigns, blogs, personnels, employees, and projects",
      impact: "Complete admin dashboard",
      category: "Management",
      website: "https://valexhub.com"
    },
    {
      id: 9,
      title: "Salton Fest",
      description: "Graphics and video design for festival event",
      impact: "Event branding & design",
      category: "Design"
    },
    {
      id: 10,
      title: "Crushing Ram's Most Beautiful Girl",
      description: "Videography and photography coverage for beauty pageant event",
      impact: "Event documentation",
      category: "Photography"
    },
    {
      id: 11,
      title: "Face of Crushing Ram",
      description: "Event coverage and visual documentation for community pageant",
      impact: "Community event coverage",
      category: "Photography"
    },
    {
      id: 12,
      title: "Fun Fest (Rema Performance)",
      description: "Video and photography coverage for major music festival featuring Rema",
      impact: "Major event documentation",
      category: "Photography"
    },
    {
      id: 13,
      title: "All White Party",
      description: "Event coverage featuring legendary drummer girl performance",
      impact: "Live event documentation",
      category: "Photography"
    },
    {
      id: 14,
      title: "Summer in the City (DJ K-Wise)",
      description: "Video and photography coverage for summer music event",
      impact: "Event visual coverage",
      category: "Photography"
    },
    {
      id: 15,
      title: "Music Videos",
      description: "Production of two professional music videos",
      impact: "Creative video production",
      category: "Video Production"
    },
    {
      id: 16,
      title: "Music Cover Arts",
      description: "Design and creation of cover arts for music videos",
      impact: "3-4 cover art designs",
      category: "Design"
    }
  ]

  return (
    <section id="projects" className="pb-16 bg-secondary/20">
      <div className="w-full relative">
        {/* Full Width Projects Title */}
        <div className="max-w-6xl mx-auto  mb-8 relative">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black uppercase leading-none w-full" style={{
            color: 'transparent',
            WebkitTextStroke: '1px #666',
            lineHeight: '0.85',
            letterSpacing: '0.2em',
            textAlign: 'justify',
            wordSpacing: '100vw'
          }}>
            PROJECTS
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Horizontal Timeline Line - positioned to align with text baseline */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent"></div>
          
          {/* Scrollable Projects Container */}
          <div className="overflow-x-auto pb-4 ">
            <div className="flex gap-12 min-w-max">
              {projects.map((project) => (
                <div key={project.id} className="relative flex-shrink-0 flex flex-col items-center">
                  {/* Vertical connecting line - connects from horizontal line */}
                  <div className="w-0.5 bg-accent h-12 opacity-70"></div>
                  
                  {/* Timeline dot */}
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-accent/50"></div>
                  
                  {/* Project card */}
                  <div className="w-64 md:w-72 bg-primary border border-accent/20 rounded-lg p-6 shadow-lg mt-4 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className="text-xs px-2 py-1 bg-accent/10 rounded-full text-accent">
                          {project.category}
                        </span>
                        {project.website && (
                          <a 
                            href={project.website.startsWith('http') ? project.website : `https://${project.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs px-2 py-1 bg-primary border border-accent/30 rounded-full text-accent hover:bg-accent hover:text-primary transition-colors"
                          >
                            Visit
                          </a>
                        )}
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm opacity-80">
                        {project.description}
                      </p>
                      
                      <div className="pt-2 border-t border-accent/10">
                        <p className="text-sm font-semibold text-accent">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects