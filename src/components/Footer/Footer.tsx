import { LocationIcon, EmailIcon, PhoneIcon, LinkedInIcon, FacebookIcon, InstagramIcon, XIcon } from '@/utils/icons'

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-accent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Wisdom D. Edet</h3>
            <p className="text-sm opacity-80 mb-4">
              Software Engineer | Visual Innovator | Founder
            </p>
            <p className="text-sm opacity-70">
              Passionate about blending technology with creativity to bring visionary ideas into execution.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80">
                <LocationIcon />
                <span>FCT Abuja Nigeria</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <EmailIcon />
                <a href="mailto:wisdomseno@valexhub.com" className="hover:text-accent transition-colors">
                  wisdomseno@valexhub.com
                </a>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <PhoneIcon />
                <a href="tel:+2348145272219" className="hover:text-accent transition-colors">
                  +234-8145272219
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/wisdom-dominic-93b345304" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent hover:opacity-100 transition-all opacity-70"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent hover:opacity-100 transition-all opacity-70"
              >
                <FacebookIcon />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent hover:opacity-100 transition-all opacity-70"
              >
                <InstagramIcon />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent hover:opacity-100 transition-all opacity-70"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>&copy; 2025 Wisdom D. Edet. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer