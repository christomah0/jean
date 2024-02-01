import { FaHeart, FaLocationDot, FaPhone } from "react-icons/fa6"
import { MdMail } from "react-icons/md"


/**
 * Footer placed in the bottom of the website which contains additional informations 
 * like "about", "contact" and "address", etc...
 * @returns React.JSX.Element
 */
function Footer() {
  return (
    <div className="footer-container">
      <footer>
        {/* About me section that contains a little introduction */}
        <div id="about" className="about-me-part">
          <h4>ABOUT ME</h4>
          <p>
            Working around technology is part of my passion that motivate me 
            to achieve interesting project personally and with all my 
            collaborators. I have experience in <code>HTML5/CSS3, React.js, tailwindcss, 
              FastAPI framework.</code> And i am always looking for challenges, so let's get in touch for 
              growing your project.
          </p>
        </div>

        {/* Address section that contains location */}
        <div className="address-part">
          <h4>ADDRESS</h4>
          <span><FaLocationDot size={16} color="#fff" /> Toliara I, Madagascar</span>
        </div>

        {/* Contact section that contains contacts list */}
        <div id="contact" className="contact-part">
          <h4>CONTACT</h4>
          <div className="contact-list">
            <span><a href="tel:+261349446231" target="_blank"><FaPhone size={16} color="#fff" /> +261 34 94 462 31</a></span>
            <span><a href="mailto:christophemahalomba@gmail.com" target="_blank"><MdMail size={16} target="_blank" /> christophemahalomba@gmail.com</a></span>
          </div>
        </div>
      </footer>

      <div className="appreciation">
        <span>Made with</span>
        <FaHeart size={16} color="red" />
        <span>using React.js</span>
      </div>
    </div>
  )
}

export default Footer