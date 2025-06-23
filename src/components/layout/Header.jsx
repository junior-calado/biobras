import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';
import { useState } from 'react';
import './Header.css';
import HomeIcon from '../../assets/icons/home.svg?react';
import AboutIcon from '../../assets/icons/info.svg?react';
import ServicesIcon from '../../assets/icons/services.svg?react';
import CareersIcon from '../../assets/icons/career.svg?react';
import ContactIcon from '../../assets/icons/contact.svg?react';

export default function Header() {
  const { currentContent } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  // Fecha o menu ao navegar
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav">
        <RouterLink to="/" className="logo" onClick={handleNavClick}>BioBras</RouterLink>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`menu-overlay${menuOpen ? ' active' : ''}`} onClick={handleNavClick}></div>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`} id="main-menu">
          <li>
            {isHomePage ? (
              <ScrollLink
                to="inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={handleNavClick}
              >
                <HomeIcon className="menu-icon" /> {currentContent.header.home}
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="nav-link" onClick={handleNavClick}>
                <HomeIcon className="menu-icon" /> {currentContent.header.home}
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={handleNavClick}
              >
                <AboutIcon className="menu-icon" /> {currentContent.header.about}
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="nav-link" onClick={handleNavClick}>
                <AboutIcon className="menu-icon" /> {currentContent.header.about}
              </RouterLink>
            )}
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
                onClick={handleNavClick}
              >
                <ServicesIcon className="menu-icon" /> {currentContent.header.services}
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="nav-link" onClick={handleNavClick}>
                <ServicesIcon className="menu-icon" /> {currentContent.header.services}
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
                onClick={handleNavClick}
              >
                <CareersIcon className="menu-icon" /> {currentContent.header.careers}
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="nav-link" onClick={handleNavClick}>
                <CareersIcon className="menu-icon" /> {currentContent.header.careers}
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
                onClick={handleNavClick}
              >
                <ContactIcon className="menu-icon" /> {currentContent.header.contact}
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="nav-link" onClick={handleNavClick}>
                <ContactIcon className="menu-icon" /> {currentContent.header.contact}
              </RouterLink>
            )}
          </li>
          <li className="language-mobile-minimal"><LanguageSelector minimal /></li>
        </ul>
        <div className="language-desktop"><LanguageSelector /></div>
      </nav>
    </header>
  );
} 