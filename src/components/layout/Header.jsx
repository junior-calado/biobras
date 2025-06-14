import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';
import './Header.css';

export default function Header() {
  const { currentContent } = useLanguage();

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">BioBras</div>
        <ul className="nav-links">
          <li>
            <ScrollLink
              to="inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              {currentContent.header.home}
            </ScrollLink>
          </li>
          <li className="dropdown">
            <ScrollLink
              to="sobre"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dropbtn"
            >
              {currentContent.header.about}
            </ScrollLink>
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>{currentContent.header.aboutDropdown.quemSomos.title}</h4>
                {currentContent.header.aboutDropdown.quemSomos.links.map((link, index) => (
                  <ScrollLink
                    key={index}
                    to={link.href.replace('#', '')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="dropdown-link"
                  >
                    {link.text}
                  </ScrollLink>
                ))}
              </div>
              <div className="dropdown-column">
                <h4>{currentContent.header.aboutDropdown.ondeEstamos.title}</h4>
                {currentContent.header.aboutDropdown.ondeEstamos.links.map((link, index) => (
                  <ScrollLink
                    key={index}
                    to={link.href.replace('#', '')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="dropdown-link"
                  >
                    {link.text}
                  </ScrollLink>
                ))}
              </div>
              <div className="dropdown-column">
                <h4>{currentContent.header.aboutDropdown.etica.title}</h4>
                {currentContent.header.aboutDropdown.etica.links.map((link, index) => (
                  <ScrollLink
                    key={index}
                    to={link.href.replace('#', '')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="dropdown-link"
                  >
                    {link.text}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </li>
          <li>
            <ScrollLink
              to="servicos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
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
              className="nav-link"
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
              className="nav-link"
            >
              {currentContent.header.contact}
            </ScrollLink>
          </li>
        </ul>
        <LanguageSelector />
      </nav>
    </header>
  );
} 