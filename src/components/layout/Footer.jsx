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
          <p>{currentContent.footer.aboutText}</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/biobras-biodiesel-sa/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>{currentContent.footer.quickLinks}</h3>
          <ul>
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
          <p>{currentContent.footer.email}</p>
          <p>{currentContent.footer.phone}</p>
          <p>{currentContent.footer.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{currentContent.footer.copyright}</p>
      </div>
    </footer>
  );
} 