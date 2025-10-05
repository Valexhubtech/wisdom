import { LocationIcon, EmailIcon, PhoneIcon, LinkedInIcon, FacebookIcon, InstagramIcon, XIcon } from '@/utils/icons'

const ContactInfo = () => {
  return (
    <section className="bg-secondary py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Contact Info - Left Side */}
          <div className="flex items-center gap-6 text-sm opacity-70">
            <div className="flex items-center gap-2">
              <LocationIcon />
              <span>FCT Abuja Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon />
              <a href="mailto:wisdomseno@valexhub.com" className="hover:text-accent">wisdomseno@valexhub.com</a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <a href="tel:+2348145272219" className="hover:text-accent">+234-8145272219</a>
            </div>
          </div>
          
          {/* Social Media - Right Side */}
          <div className="flex items-center gap-4 opacity-70">
            <a href="https://www.linkedin.com/in/wisdom-dominic-93b345304" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:opacity-100 transition-all">
              <LinkedInIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:opacity-100 transition-all">
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:opacity-100 transition-all">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:opacity-100 transition-all">
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo