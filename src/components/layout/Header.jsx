import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../common/LanguageSelector';
import { useState, useEffect } from 'react';
import './Header.css';
import HomeIcon from '../../assets/icons/home.svg?react';
import AboutIcon from '../../assets/icons/info.svg?react';
import ServicesIcon from '../../assets/icons/services.svg?react';
import CareersIcon from '../../assets/icons/career.svg?react';
import ContactIcon from '../../assets/icons/contact.svg?react';

const ArrowIcon = ({ open }) => (
  <svg
    style={{
      marginLeft: 8,
      transition: 'transform 0.3s',
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      width: 18,
      height: 18,
      verticalAlign: 'middle',
      fill: '#5aa43b',
      flexShrink: 0
    }}
    viewBox="0 0 24 24"
  >
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
);

export default function Header() {
  const { currentContent } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Impede o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen, isMobile]);

  const isHomePage = location.pathname === '/';

  const handleNavClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const handleSectionNav = (section) => {
    setMenuOpen(false);
    if (isHomePage) {
      scroller.scrollTo(section, {
        smooth: true,
        offset: -70,
        duration: 500,
        spy: true,
      });
    } else {
      navigate('/', { replace: false });
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -70,
          duration: 500,
          spy: true,
        });
      }, 100);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <a className="logo" onClick={() => handleSectionNav('inicio')} style={{ cursor: 'pointer' }}>
          <img src={`${import.meta.env.BASE_URL}images/letreiro_transparente.png`} alt="Logo BioBras" style={{ height: '100px' }} />
        </a>
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
        <ul className={`nav-links nav-links-inner${menuOpen ? ' active' : ''}`} id="main-menu">
          <li>
            <a className="nav-link" onClick={() => { handleSectionNav('inicio'); handleNavClick(); }} style={{ cursor: 'pointer' }}>
              {currentContent.header.home}
            </a>
          </li>
          <li className="dropdown">
            <a className={`nav-link${isMobile && openDropdown === 'sobre' ? ' open' : ''}`} onClick={isMobile ? () => handleDropdownToggle('sobre') : () => handleSectionNav('sobre')} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
              {currentContent.header.about}
              {isMobile && <ArrowIcon open={openDropdown === 'sobre'} />}
            </a>
            {(isMobile && openDropdown === 'sobre') || (!isMobile) ? (
              <div className={`dropdown-content${isMobile && openDropdown === 'sobre' ? ' show-mobile' : ''}`}
                style={isMobile ? { maxHeight: openDropdown === 'sobre' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', position: 'static', boxShadow: 'none', padding: 0, background: 'none' } : {}}>
                <div className="dropdown-column">
                  <h4>Sobre</h4>
                  <ScrollLink to="sobre" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Quem Somos</ScrollLink>
                  <ScrollLink to="sobre" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Nossa História</ScrollLink>
                </div>
                <div className="dropdown-column">
                  <h4>Sobre</h4>
                  <ScrollLink to="sobre" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Reconhecimentos</ScrollLink>
                  <ScrollLink to="sobre" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Notícias</ScrollLink>
                </div>
              </div>
            ) : null}
          </li>
          <li className="dropdown">
            <a className={`nav-link${isMobile && openDropdown === 'servicos' ? ' open' : ''}`} onClick={isMobile ? () => handleDropdownToggle('servicos') : () => handleSectionNav('servicos')} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
              {currentContent.header.services}
              {isMobile && <ArrowIcon open={openDropdown === 'servicos'} />}
            </a>
            {(isMobile && openDropdown === 'servicos') || (!isMobile) ? (
              <div className={`dropdown-content${isMobile && openDropdown === 'servicos' ? ' show-mobile' : ''}`}
                style={isMobile ? { maxHeight: openDropdown === 'servicos' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', position: 'static', boxShadow: 'none', padding: 0, background: 'none' } : {}}>
                <div className="dropdown-column">
                  <h4>Negócios</h4>
                  <ScrollLink to="servicos" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Pesquisa</ScrollLink>
                  <ScrollLink to="servicos" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Consultoria</ScrollLink>
                </div>
                <div className="dropdown-column">
                  <h4>Negócios</h4>
                  <ScrollLink to="servicos" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Laboratório</ScrollLink>
                  <ScrollLink to="servicos" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Outros Serviços</ScrollLink>
                </div>
              </div>
            ) : null}
          </li>
          <li className="dropdown">
            <a className={`nav-link${isMobile && openDropdown === 'contato' ? ' open' : ''}`} onClick={isMobile ? () => handleDropdownToggle('contato') : () => handleSectionNav('contato')} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
              {currentContent.header.contact}
              {isMobile && <ArrowIcon open={openDropdown === 'contato'} />}
            </a>
            {(isMobile && openDropdown === 'contato') || (!isMobile) ? (
              <div className={`dropdown-content${isMobile && openDropdown === 'contato' ? ' show-mobile' : ''}`}
                style={isMobile ? { maxHeight: openDropdown === 'contato' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', position: 'static', boxShadow: 'none', padding: 0, background: 'none' } : {}}>
                <div className="dropdown-column">
                  <h4>Fale conosco</h4>
                  <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Fale Conosco</ScrollLink>
                  <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Endereço</ScrollLink>
                </div>
                <div className="dropdown-column">
                  <h4>Fale conosco</h4>
                  <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Telefone</ScrollLink>
                  <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>E-mail</ScrollLink>
                </div>
              </div>
            ) : null}
          </li>
          <li className="dropdown">
            <a className={`nav-link${isMobile && openDropdown === 'carreiras' ? ' open' : ''}`} onClick={isMobile ? () => handleDropdownToggle('carreiras') : () => handleSectionNav('carreiras')} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
              {currentContent.header.careers}
              {isMobile && <ArrowIcon open={openDropdown === 'carreiras'} />}
            </a>
            {(isMobile && openDropdown === 'carreiras') || (!isMobile) ? (
              <div className={`dropdown-content${isMobile && openDropdown === 'carreiras' ? ' show-mobile' : ''}`}
                style={isMobile ? { maxHeight: openDropdown === 'carreiras' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', position: 'static', boxShadow: 'none', padding: 0, background: 'none' } : {}}>
                <div className="dropdown-column">
                  <h4>Trabalhe conosco</h4>
                  <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Vagas</ScrollLink>
                  <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Benefícios</ScrollLink>
                </div>
                <div className="dropdown-column">
                  <h4>Trabalhe conosco</h4>
                  <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Cultura</ScrollLink>
                  <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>Trabalhe Conosco</ScrollLink>
                </div>
              </div>
            ) : null}
          </li>
          <li className="language-mobile-minimal"><LanguageSelector minimal /></li>
        </ul>
        <li className="language-desktop"><LanguageSelector /></li>
      </nav>
    </header>
  );
} 