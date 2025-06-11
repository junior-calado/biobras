import { useState, useRef, useEffect } from 'react'
import './App.css'

const content = {
  pt: {
    home: {
      title: 'BioBras',
      subtitle: 'Transformando o futuro através da biotecnologia sustentável',
      ctaButton: 'Conheça Nossas Soluções',
    },
    header: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      contact: 'Contato',
      careers: 'Carreiras',
    },
    about: {
      title: 'Sobre Nós',
      mainHeading: 'Na BioBras, acreditamos que o <span class="highlight-green">futuro</span> é cultivado hoje. Somos pioneiros em biotecnologia, transformando recursos naturais em soluções <span class="highlight-green">sustentáveis</span> que impulsionam a indústria e preservam o <span class="highlight-green">meio ambiente</span>.',
      subParagraph: 'Do campo à inovação, nossa paixão é gerar energia renovável que alimenta o progresso e constrói um amanhã mais verde para todos.',
      ctaLinkText: 'Conheça nossos produtos',
    },
    services: {
      title: 'Nossos Serviços',
      research: {
        title: 'Pesquisa e Desenvolvimento',
        description: 'Desenvolvimento de soluções biotecnológicas inovadoras para diversos setores.',
      },
      consulting: {
        title: 'Consultoria Técnica',
        description: 'Assessoria especializada em projetos biotecnológicos e sustentáveis.',
      },
      analysis: {
        title: 'Análises Laboratoriais',
        description: 'Serviços de análises especializadas com tecnologia de ponta.',
      },
    },
    contact: {
      title: 'Entre em Contato',
      namePlaceholder: 'Nome completo',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Telefone',
      messagePlaceholder: 'Sua mensagem',
      button: 'Enviar Mensagem',
    },
    careers: {
      subtitle: 'TRABALHE CONOSCO',
      title: 'Reinvente o futuro com a gente.',
      description: 'Confira nossas oportunidades',
      ctaButton: 'Quero fazer parte →',
    },
    footer: {
      aboutText: 'Soluções inovadoras em biotecnologia para um futuro sustentável. Comprometidos com a ciência e o meio ambiente.',
      quickLinks: 'Links Rápidos',
      contactInfo: 'Contato',
      email: 'contato@biobras.com',
      phone: '+55 (11) 98765-4321',
      address: 'Rua da Inovação, 123 - Maringa, PR',
      copyright: '© 2024 BioBras. Todos os direitos reservados.',
    },
  },
  en: {
    home: {
      title: 'BioBras',
      subtitle: 'Transforming the future through sustainable biotechnology',
      ctaButton: 'Discover Our Solutions',
    },
    header: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      careers: 'Careers',
    },
    about: {
      title: 'About Us',
      mainHeading: 'At BioBras, we believe the <span class="highlight-green">future</span> is cultivated today. We are pioneers in biotechnology, transforming natural resources into <span class="highlight-green">sustainable</span> solutions that drive industry and preserve the <span class="highlight-green">environment</span>.',
      subParagraph: 'From the field to innovation, our passion is to generate renewable energy that fuels progress and builds a greener tomorrow for all.',
      ctaLinkText: 'Discover our products',
    },
    services: {
      title: 'Our Services',
      research: {
        title: 'Research and Development',
        description: 'Development of innovative biotechnology solutions for various sectors.',
      },
      consulting: {
        title: 'Technical Consulting',
        description: 'Specialized advisory services for biotechnology and sustainable projects.',
      },
      analysis: {
        title: 'Laboratory Analysis',
        description: 'Specialized analysis services with cutting-edge technology.',
      },
    },
    contact: {
      title: 'Get in Touch',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone',
      messagePlaceholder: 'Your message',
      button: 'Send Message',
    },
    careers: {
      subtitle: 'WORK WITH US',
      title: 'Reinvent the future with us.',
      description: 'Check our opportunities',
      ctaButton: 'I want to be part →',
    },
    footer: {
      aboutText: 'Innovative biotechnology solutions for a sustainable future. Committed to science and the environment.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      email: 'contact@biobras.com',
      phone: '+1 (555) 123-4567',
      address: 'Innovation Street, 123 - Maringa, PR, Brazil',
      copyright: '© 2024 BioBras. All rights reserved.',
    },
  },
  es: {
    home: {
      title: 'BioBras',
      subtitle: 'Transformando el futuro a través de la biotecnología sostenible',
      ctaButton: 'Conozca Nuestras Soluciones',
    },
    header: {
      home: 'Inicio',
      about: 'Acerca de',
      services: 'Servicios',
      contact: 'Contacto',
      careers: 'Carreras',
    },
    about: {
      title: 'Acerca de Nosotros',
      mainHeading: 'En BioBras, creemos que el <span class="highlight-green">futuro</span> se cultiva hoy. Somos pioneros en biotecnología, transformando recursos naturales en soluciones <span class="highlight-green">sostenibles</span> que impulsan la industria y preservan el <span class="highlight-green">medio ambiente</span>.',
      subParagraph: 'Del campo a la innovación, nuestra pasión es generar energía renovable que impulsa el progreso y construye un mañana más verde para todos.',
      ctaLinkText: 'Conozca nuestros productos',
    },
    services: {
      title: 'Nuestros Servicios',
      research: {
        title: 'Investigación y Desarrollo',
        description: 'Desarrollo de soluciones biotecnológicas innovadoras para diversos sectores.',
      },
      consulting: {
        title: 'Consultoría Técnica',
        description: 'Asesoramiento especializado en proyectos biotecnológicos y sostenibles.',
      },
      analysis: {
        title: 'Análisis de Laboratorio',
        description: 'Servicios de análisis especializados con tecnología de vanguardia.',
      },
    },
    contact: {
      title: 'Póngase en Contacto',
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Correo electrónico',
      phonePlaceholder: 'Teléfono',
      messagePlaceholder: 'Su mensaje',
      button: 'Enviar Mensaje',
    },
    careers: {
      subtitle: 'TRABAJE CON NOSOTROS',
      title: 'Reinvente el futuro con nosotros.',
      description: 'Consulte nuestras oportunidades',
      ctaButton: 'Quiero ser parte →',
    },
    footer: {
      aboutText: 'Soluciones innovadoras en biotecnología para un futuro sostenible. Comprometidos con la ciencia y el medio ambiente.',
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Contacto',
      email: 'contacto@biobras.com',
      phone: '+34 (91) 123-4567',
      address: 'Calle de la Innovación, 123 - Maringa, PR, Brasil',
      copyright: '© 2024 BioBras. Todos los derechos reservados.',
    },
  },
}

function App() {
  const [language, setLanguage] = useState('pt')
  const currentContent = content[language]

  const aboutSectionRef = useRef(null)
  const [aboutSectionVisible, setAboutSectionVisible] = useState(false)
  const contactMapRef = useRef(null)
  const [contactMapVisible, setContactMapVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutSectionVisible(true)
          } else {
            setAboutSectionVisible(false)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current)
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContactMapVisible(true)
          } else {
            setContactMapVisible(false)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (contactMapRef.current) {
      observer.observe(contactMapRef.current)
    }

    return () => {
      if (contactMapRef.current) {
        observer.unobserve(contactMapRef.current)
      }
    }
  }, [])

  return (
    <div className="app">
      {/* Header/Navbar */}
      <header className="header">
        <nav className="nav">
          <div className="logo">BioBras</div>
          <ul className="nav-links">
            <li><a href="#inicio">{currentContent.header.home}</a></li>
            <li><a href="#sobre">{currentContent.header.about}</a></li>
            <li><a href="#servicos">{currentContent.header.services}</a></li>
            <li><a href="#carreiras">{currentContent.header.careers}</a></li>
            <li><a href="#contato">{currentContent.header.contact}</a></li>
          </ul>
          <div className="language-selector">
            <button 
              className={`language-btn ${language === 'pt' ? 'active' : ''}`}
              onClick={() => setLanguage('pt')}
            >
              <img src="/flags/brazil.png" alt="Português" />
            </button>
            <button 
              className={`language-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              <img src="/flags/usa.png" alt="English" />
            </button>
            <button 
              className={`language-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
            >
              <img src="/flags/spain.png" alt="Español" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="carousel-container">
          {/* As imagens do carrossel virão aqui */}
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
        </div>
        <div className="hero-content">
          <h1>{currentContent.home.title}</h1>
          <p>{currentContent.home.subtitle}</p>
          <button className="cta-button">{currentContent.home.ctaButton}</button>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className={`about ${aboutSectionVisible ? 'fade-in' : ''}`} ref={aboutSectionRef}>
        <h2>{currentContent.about.title}</h2>
        <div className="about-content">
          <div className={`about-text ${aboutSectionVisible ? 'slide-up' : ''}`}>
            <h3 dangerouslySetInnerHTML={{ __html: currentContent.about.mainHeading }}></h3>
            <p>{currentContent.about.subParagraph}</p>
            <a href="#produtos" className="about-cta-link">
              {currentContent.about.ctaLinkText} <span className="arrow">→</span>
            </a>
          </div>
          <div className="about-images">
            {/* Placeholder para a primeira imagem */}
            <div className={`about-image-item ${aboutSectionVisible ? 'slide-up delay-1' : ''}`}>
              {/* Sua imagem aqui */}
            </div>
            {/* Placeholder para a segunda imagem */}
            <div className={`about-image-item ${aboutSectionVisible ? 'slide-up delay-2' : ''}`}>
              {/* Sua imagem aqui */}
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="services">
        <h2>{currentContent.services.title}</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>{currentContent.services.research.title}</h3>
            <p>{currentContent.services.research.description}</p>
          </div>
          <div className="service-card">
            <h3>{currentContent.services.consulting.title}</h3>
            <p>{currentContent.services.consulting.description}</p>
          </div>
          <div className="service-card">
            <h3>{currentContent.services.analysis.title}</h3>
            <p>{currentContent.services.analysis.description}</p>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="contact">
        <h2>{currentContent.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-map-container" ref={contactMapRef}>
            <div className={`contact-map-text ${contactMapVisible ? 'slide-up' : ''}`}>
              <h3 dangerouslySetInnerHTML={{ __html: 'Venha nos <span class="highlight-green">visitar</span> e conhecer nossa <span class="highlight-green">tecnologia</span> de perto. Estamos prontos para receber você em nossa <span class="highlight-green">sede</span> em Maringá.' }}></h3>
              <p>Localizados estrategicamente no coração do Paraná, oferecemos fácil acesso e infraestrutura completa para receber nossos parceiros e clientes.</p>
            </div>
            <div className={`contact-map ${contactMapVisible ? 'slide-right delay-1' : ''}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.1234567890123!2d-51.9375!3d-23.4256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI1JzMyLjIiUyA1McKwNTYnMTUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder={currentContent.contact.namePlaceholder} required />
            <input type="email" placeholder={currentContent.contact.emailPlaceholder} required />
            <input type="tel" placeholder={currentContent.contact.phonePlaceholder} />
            <textarea placeholder={currentContent.contact.messagePlaceholder} required></textarea>
            <button type="submit">{currentContent.contact.button}</button>
          </form>
        </div>
      </section>

      {/* Nova Seção: Trabalhe Conosco */}
      <section id="carreiras" className="careers">
        <div className="careers-content">
          <div className="careers-image">
            {/* Você pode adicionar sua imagem aqui depois */}
            <img src="/images/trabalhe-conosco-placeholder.jpg" alt="Trabalhe Conosco" />
          </div>
          <div className="careers-text">
            <p className="section-subtitle">{currentContent.careers.subtitle}</p>
            <h2>{currentContent.careers.title}</h2>
            <p>{currentContent.careers.description}</p>
            <button className="cta-button">{currentContent.careers.ctaButton}</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about-us">
            <h3>BioBras</h3>
            <p>{currentContent.footer.aboutText}</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h3>{currentContent.footer.quickLinks}</h3>
            <ul>
              <li><a href="#inicio">{currentContent.header.home}</a></li>
              <li><a href="#sobre">{currentContent.header.about}</a></li>
              <li><a href="#servicos">{currentContent.header.services}</a></li>
              <li><a href="#carreiras">{currentContent.header.careers}</a></li>
              <li><a href="#contato">{currentContent.header.contact}</a></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h3>{currentContent.footer.contactInfo}</h3>
            <p>Email: {currentContent.footer.email}</p>
            <p>Telefone: {currentContent.footer.phone}</p>
            <p>Endereço: {currentContent.footer.address}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{currentContent.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
