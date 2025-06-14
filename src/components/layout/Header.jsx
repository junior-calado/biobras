import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';
import './Header.css';

export default function Header() {
  const { currentContent } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <nav className="nav">
        <RouterLink to="/" className="logo">BioBras</RouterLink>
        <ul className="nav-links">
          <li>
            {isHomePage ? (
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
            ) : (
              <RouterLink to="/" className="nav-link">
                {currentContent.header.home}
              </RouterLink>
            )}
          </li>
          <li className="dropdown">
            {isHomePage ? (
              <ScrollLink
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link dropbtn"
              >
                {currentContent.header.about}
              </ScrollLink>
            ) : (
              <span className="nav-link dropbtn">{currentContent.header.about}</span>
            )}
            <div className="dropdown-content">
              <div className="dropdown-column">
                <h4>{currentContent.header.aboutDropdown.quemSomos.title}</h4>
                {currentContent.header.aboutDropdown.quemSomos.links.map((item, idx) => (
                  <a key={idx} href={item.href} className="dropdown-link">{item.text}</a>
                ))}
              </div>
              <div className="dropdown-column">
                <h4>{currentContent.header.aboutDropdown.ondeEstamos.title}</h4>
                {currentContent.header.aboutDropdown.ondeEstamos.links.map((item, idx) => (
                  <a key={idx} href={item.href} className="dropdown-link">{item.text}</a>
                ))}
              </div>
              <div className="dropdown-column">
                <h4>{currentContent.header.aboutDropdown.etica.title}</h4>
                {currentContent.header.aboutDropdown.etica.links.map((item, idx) => (
                  <a key={idx} href={item.href} className="dropdown-link">{item.text}</a>
                ))}
              </div>
            </div>
          </li>
          <li>
            {isHomePage ? (
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
            ) : (
              <RouterLink to="/" className="nav-link">
                {currentContent.header.services}
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
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
            ) : (
              <RouterLink to="/" className="nav-link">
                {currentContent.header.careers}
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
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
            ) : (
              <RouterLink to="/" className="nav-link">
                {currentContent.header.contact}
              </RouterLink>
            )}
          </li>
        </ul>
        <LanguageSelector />
      </nav>
    </header>
  );
} 