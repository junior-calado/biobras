import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { currentContent } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>BioBras</h3>
          <p className="footer-about-text">{currentContent.footer.aboutText}</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/biobras-biodiesel-sa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452H17.21V15.412C17.21 14.222 17.188 12.662 15.532 12.662C13.852 12.662 13.617 13.978 13.617 15.327V20.452H10.382V9H13.477V10.337H13.518C13.949 9.533 14.893 8.688 16.237 8.688C19.091 8.688 20.448 10.377 20.448 13.092V20.452H20.447ZM7.337 7.433C6.194 7.433 5.273 6.509 5.273 5.367C5.273 4.225 6.194 3.301 7.337 3.301C8.479 3.301 9.401 4.225 9.401 5.367C9.401 6.509 8.479 7.433 7.337 7.433ZM8.956 20.452H5.717V9H8.956V20.452ZM22.225 0H1.771C0.792 0 0 0.771 0 1.723V22.275C0 23.229 0.792 24 1.771 24H22.222C23.2 24 24 23.229 24 22.275V1.723C24 0.771 23.2 0 22.222 0H22.225Z" fill="white"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/biobrasbiodiesel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>{currentContent.footer.quickLinks}</h3>
          <ul className="footer-links">
            <li>
              <ScrollLink
                to="inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link"
              >
                {currentContent.header.home}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link"
              >
                {currentContent.header.about}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="servicos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link"
              >
                {currentContent.header.services}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="carreiras"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link"
              >
                {currentContent.header.careers}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="footer-link"
              >
                {currentContent.header.contact}
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>{currentContent.footer.contactInfo}</h3>
          <p className="footer-contact-email"><a href="mailto:comercial@biobras.ind.br">comercial@biobras.ind.br</a></p>
          <p className="footer-contact-phone"><a href="tel:+554431321227">(44) 3132-1227</a></p>
          <p>{currentContent.footer.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{currentContent.footer.copyright}</p>
      </div>
    </footer>
  );
} 
