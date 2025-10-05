import Hero from '@/components/Hero/Hero'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
import About from '@/components/About/About'
import CoreSkills from '@/components/CoreSkills/CoreSkills'
import Experience from '@/components/Experience/Experience'
import KeyAchievements from '@/components/KeyAchievements/KeyAchievements'
import Projects from '@/components/Projects/Projects'
import Education from '@/components/Education/Education'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className="space-y-0">
      <Hero />
      <ContactInfo />
      <About />
      <CoreSkills />
      <Experience/>
      <KeyAchievements />
      <Projects />
      <Education />
      <Footer />
    </main>
  )
}