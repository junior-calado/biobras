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
        <div className="header-section header-logo">
          <a className="logo" onClick={() => handleSectionNav('inicio')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <img src={`${import.meta.env.BASE_URL}images/Icon_transparente.png`} alt="Ícone BioBras" style={{ height: '85px', display: 'block', marginTop: '-15px' }} />
              <img src={`${import.meta.env.BASE_URL}images/letreiro_transparente.png`} alt="Logo BioBras" style={{ height: '100px', display: 'block' }} />
            </div>
          </a>
        </div>
        <div className="header-section header-menu">
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
              <a className={`nav-link${isMobile && openDropdown === 'sobrebiobras' ? ' open' : ''}`} onClick={isMobile ? () => handleDropdownToggle('sobrebiobras') : undefined} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
                {currentContent.header.aboutDropdown.title}
                {isMobile && <ArrowIcon open={openDropdown === 'sobrebiobras'} />}
              </a>
              {(isMobile && openDropdown === 'sobrebiobras') || (!isMobile) ? (
                <div className={`dropdown-content${isMobile && openDropdown === 'sobrebiobras' ? ' show-mobile' : ''}`}
                  style={isMobile ? { maxHeight: openDropdown === 'sobrebiobras' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', position: 'static', boxShadow: 'none', padding: 0, background: 'none' } : {}}>
                  <div className="dropdown-column">
                    <h4>{currentContent.header.aboutDropdown.title}</h4>
                    <RouterLink to="/sobre?sec=historia" className="submenu-item" onClick={handleNavClick}>{currentContent.header.aboutDropdown.historia}</RouterLink>
                    <RouterLink to="/sobre?sec=certificacao" className="submenu-item" onClick={handleNavClick}>{currentContent.header.aboutDropdown.certificacao}</RouterLink>
                    <RouterLink to="/sobre?sec=sustentabilidade" className="submenu-item" onClick={handleNavClick}>{currentContent.header.aboutDropdown.sustentabilidade}</RouterLink>
                    <RouterLink to="/sobre?sec=onde" className="submenu-item" onClick={handleNavClick}>{currentContent.header.aboutDropdown.ondeEstamos}</RouterLink>
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
                    <h4>{currentContent.header.servicesDropdown.title}</h4>
                    <RouterLink to="/negocios?sec=area" className="submenu-item" onClick={handleNavClick}>{currentContent.header.servicesDropdown.area}</RouterLink>
                    <RouterLink to="/negocios?sec=biodiesel" className="submenu-item" onClick={handleNavClick}>{currentContent.header.servicesDropdown.biodiesel}</RouterLink>
                    <RouterLink to="/negocios?sec=higiene" className="submenu-item" onClick={handleNavClick}>{currentContent.header.servicesDropdown.higiene}</RouterLink>
                  </div>
                </div>
              ) : null}
            </li>
            <li className="dropdown">
              <a className={`nav-link${isMobile && openDropdown === 'fornecedor' ? ' open' : ''}`} onClick={isMobile ? () => handleDropdownToggle('fornecedor') : () => handleSectionNav('fornecedor')} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
                {currentContent.header.fornecedorDropdown.title}
                {isMobile && <ArrowIcon open={openDropdown === 'fornecedor'} />}
              </a>
              {(isMobile && openDropdown === 'fornecedor') || (!isMobile) ? (
                <div className={`dropdown-content${isMobile && openDropdown === 'fornecedor' ? ' show-mobile' : ''}`}
                  style={isMobile ? { maxHeight: openDropdown === 'fornecedor' ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)', display: 'flex', flexDirection: 'column', position: 'static', boxShadow: 'none', padding: 0, background: 'none' } : {}}>
                  <div className="dropdown-column">
                    <h4>{currentContent.header.fornecedorDropdown.title}</h4>
                    <RouterLink to="/fornecedor?sec=vegetal" className="submenu-item" onClick={handleNavClick}>{currentContent.header.fornecedorDropdown.vegetal}</RouterLink>
                    <RouterLink to="/fornecedor?sec=animal" className="submenu-item" onClick={handleNavClick}>{currentContent.header.fornecedorDropdown.animal}</RouterLink>
                    <RouterLink to="/fornecedor?sec=misto" className="submenu-item" onClick={handleNavClick}>{currentContent.header.fornecedorDropdown.misto}</RouterLink>
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
                    <h4>{currentContent.header.contactDropdown.title}</h4>
                    <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.contactDropdown.faleConosco}</ScrollLink>
                    <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.contactDropdown.endereco}</ScrollLink>
                  </div>
                  <div className="dropdown-column">
                    <h4>{currentContent.header.contactDropdown.title}</h4>
                    <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.contactDropdown.telefone}</ScrollLink>
                    <ScrollLink to="contato" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.contactDropdown.email}</ScrollLink>
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
                    <h4>{currentContent.header.careersDropdown.title}</h4>
                    <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.careersDropdown.vagas}</ScrollLink>
                    <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.careersDropdown.beneficios}</ScrollLink>
                  </div>
                  <div className="dropdown-column">
                    <h4>{currentContent.header.careersDropdown.title}</h4>
                    <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.careersDropdown.cultura}</ScrollLink>
                    <ScrollLink to="carreiras" spy={true} smooth={true} offset={-70} duration={500} className="submenu-item" onClick={handleNavClick}>{currentContent.header.careersDropdown.trabalheConosco}</ScrollLink>
                  </div>
                </div>
              ) : null}
            </li>
            <li className="language-mobile-minimal"><LanguageSelector minimal /></li>
          </ul>
        </div>
        <div className="header-section header-lang">
          <li className="language-desktop"><LanguageSelector /></li>
        </div>
      </nav>
    </header>
  );
} 