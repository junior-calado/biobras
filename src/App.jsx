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
      aboutDropdown: {
        quemSomos: {
          title: 'Quem Somos',
          links: [
            { text: 'Nosso Propósito', href: '#proposito' },
            { text: 'Nossa História', href: '#historia' },
            { text: 'Nossos Reconhecimentos', href: '#reconhecimentos' },
            { text: 'Vídeo Institucional', href: '#video-institucional' },
            { text: 'Publicações', href: '#publicacoes' },
            { text: 'Nossas Notícias', href: '#noticias' },
          ],
        },
        ondeEstamos: {
          title: 'Onde Estamos',
          links: [
            { text: 'Mapa', href: '#mapa' },
            { text: 'Unidades Industriais', href: '#unidades-industriais' },
            { text: 'Escritórios de negócios', href: '#escritorios' },
          ],
        },
        etica: {
          title: 'Ética',
          links: [
            { text: 'Canal de Denúncias', href: '#canal-denuncias' },
            { text: 'Código de Conduta', href: '#codigo-conduta' },
            { text: 'Código de Conduta de Parceiros Comerciais', href: '#codigo-parceiros' },
            { text: 'Compliance', href: '#compliance' },
          ],
        },
      },
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
      visitText: 'Venha nos <span class="highlight-green">visitar</span> e conhecer nossa <span class="highlight-green">tecnologia</span> de perto. Estamos prontos para receber você em nossa <span class="highlight-green">sede</span> em Maringá.',
      locationText: 'Localizados estrategicamente no coração do Paraná, oferecemos fácil acesso e infraestrutura completa para receber nossos parceiros e clientes.'
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
      aboutDropdown: {
        quemSomos: {
          title: 'Who We Are',
          links: [
            { text: 'Our Purpose', href: '#purpose' },
            { text: 'Our History', href: '#history' },
            { text: 'Our Recognitions', href: '#recognitions' },
            { text: 'Institutional Video', href: '#institutional-video' },
            { text: 'Publications', href: '#publications' },
            { text: 'Our News', href: '#news' },
          ],
        },
        ondeEstamos: {
          title: 'Where We Are',
          links: [
            { text: 'Map', href: '#map' },
            { text: 'Industrial Units', href: '#industrial-units' },
            { text: 'Business Offices', href: '#business-offices' },
          ],
        },
        etica: {
          title: 'Ethics',
          links: [
            { text: 'Whistleblower Channel', href: '#whistleblower-channel' },
            { text: 'Code of Conduct', href: '#code-of-conduct' },
            { text: 'Commercial Partners Code of Conduct', href: '#partners-code' },
            { text: 'Compliance', href: '#compliance' },
          ],
        },
      },
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
      visitText: 'Come <span class="highlight-green">visit</span> us and see our <span class="highlight-green">technology</span> up close. We are ready to welcome you to our <span class="highlight-green">headquarters</span> in Maringá.',
      locationText: 'Strategically located in the heart of Paraná, we offer easy access and complete infrastructure to receive our partners and clients.'
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
      aboutDropdown: {
        quemSomos: {
          title: 'Quiénes Somos',
          links: [
            { text: 'Nuestro Propósito', href: '#proposito' },
            { text: 'Nuestra Historia', href: '#historia' },
            { text: 'Nuestros Reconocimientos', href: '#reconocimientos' },
            { text: 'Video Institucional', href: '#video-institucional' },
            { text: 'Publicaciones', href: '#publicaciones' },
            { text: 'Nuestras Noticias', href: '#noticias' },
          ],
        },
        ondeEstamos: {
          title: 'Dónde Estamos',
          links: [
            { text: 'Mapa', href: '#mapa' },
            { text: 'Unidades Industriales', href: '#unidades-industriales' },
            { text: 'Oficinas de Negocios', href: '#oficinas' },
          ],
        },
        etica: {
          title: 'Ética',
          links: [
            { text: 'Canal de Denuncias', href: '#canal-denuncias' },
            { text: 'Código de Conducta', href: '#codigo-conducta' },
            { text: 'Código de Conducta de Socios Comerciales', href: '#codigo-socios' },
            { text: 'Cumplimiento', href: '#cumplimiento' },
          ],
        },
      },
    },
    about: {
      title: 'Acerca de Nosotros',
      mainHeading: 'En BioBras, creemos que el <span class="highlight-green">futuro</span> se cultiva hoy. Somos pioneros en biotecnología, transformando recursos naturais em soluções <span class="highlight-green">sostenibles</span> que impulsan la industria y preservan el <span class="highlight-green">medio ambiente</span>.',
      subParagraph: 'Del campo a la innovación, nuestra pasión es generar energía renovable que impulsa el progreso y construye un mañana más verde para todos.',
      ctaLinkText: 'Conozca nossos produtos',
    },
    services: {
      title: 'Nuestros Servicios',
      research: {
        title: 'Investigación y Desarrollo',
        description: 'Desarrollo de soluções biotecnológicas inovadoras para diversos setores.',
      },
      consulting: {
        title: 'Consultoría Técnica',
        description: 'Asesoramiento especializado en projetos biotecnológicos e sustentáveis.',
      },
      analysis: {
        title: 'Análisis de Laboratorio',
        description: 'Servicios de análisis especializados com tecnologia de vanguardia.',
      },
    },
    contact: {
      title: 'Póngase en Contacto',
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Correo electrónico',
      phonePlaceholder: 'Teléfono',
      messagePlaceholder: 'Su mensaje',
      button: 'Enviar Mensaje',
      visitText: 'Venga a <span class="highlight-green">visitarnos</span> e conozca nossa <span class="highlight-green">tecnología</span> de cerca. Estamos listos para recibirle en nuestra <span class="highlight-green">sede</span> en Maringá.',
      locationText: 'Ubicados estratégicamente en el corazón de Paraná, ofrecemos fácil acceso e infraestrutura completa para recibir a nuestros socios y clientes.'
    },
    careers: {
      subtitle: 'TRABAJE CON NOSOTROS',
      title: 'Reinvente el futuro con nosotros.',
      description: 'Consulte nossas oportunidades',
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

  const careersSectionRef = useRef(null)
  const [careersSectionVisible, setCareersSectionVisible] = useState(false)

  // Carrossel de imagens
  const carouselImages = [
    './images/img2.jpg',
    './images/img1.jpg',
    // Adicione mais imagens aqui conforme necessário
  ]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 2000) // 2 segundos
    return () => clearInterval(interval)
  }, [carouselImages.length])

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCareersSectionVisible(true)
          } else {
            setCareersSectionVisible(false)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (careersSectionRef.current) {
      observer.observe(careersSectionRef.current)
    }

    return () => {
      if (careersSectionRef.current) {
        observer.unobserve(careersSectionRef.current)
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
            <li className="dropdown">
              <a href="#sobre" className="dropbtn">{currentContent.header.about}</a>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h4>{currentContent.header.aboutDropdown.quemSomos.title}</h4>
                  {currentContent.header.aboutDropdown.quemSomos.links.map((link, index) => (
                    <a key={index} href={link.href}>{link.text}</a>
                  ))}
                </div>
                <div className="dropdown-column">
                  <h4>{currentContent.header.aboutDropdown.ondeEstamos.title}</h4>
                  {currentContent.header.aboutDropdown.ondeEstamos.links.map((link, index) => (
                    <a key={index} href={link.href}>{link.text}</a>
                  ))}
                </div>
                <div className="dropdown-column">
                  <h4>{currentContent.header.aboutDropdown.etica.title}</h4>
                  {currentContent.header.aboutDropdown.etica.links.map((link, index) => (
                    <a key={index} href={link.href}>{link.text}</a>
                  ))}
                </div>
              </div>
            </li>
            <li><a href="#servicos">{currentContent.header.services}</a></li>
            <li><a href="#carreiras">{currentContent.header.careers}</a></li>
            <li><a href="#contato">{currentContent.header.contact}</a></li>
          </ul>
          <div className="language-selector">
            <button
              className={`language-btn ${language === 'pt' ? 'active' : ''}`}
              onClick={() => setLanguage('pt')}
            >
              <img src="./images/flags/brasil.png" alt="Português" />
              <div className="image-attribution">
                <a href="https://www.flaticon.com/br/icones-gratis/brasil" title="brasil ícones">Brasil ícones criados por Freepik - Flaticon</a>
              </div>
            </button>
            <button
              className={`language-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              <img src="./images/flags/estados-unidos.png" alt="English" />
              <div className="image-attribution">
                <a href="https://www.flaticon.com/br/icones-gratis/estados-unidos" title="estados unidos ícones">Estados unidos ícones criados por Freepik - Flaticon</a>
              </div>
            </button>
            <button
              className={`language-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
            >
              <img src="./images/flags/espanha.png" alt="Español" />
              <div className="image-attribution">
                <a href="https://www.flaticon.com/br/icones-gratis/espanha" title="espanha ícones">Espanha ícones criados por Freepik - Flaticon</a>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-bg-image">
          <img src="./images/img2.jpg" alt="Hero" />
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
            <div className={`about-image-item ${aboutSectionVisible ? 'slide-up' : ''}`}>
              <img src="/images/about-main.jpg" alt="Nossa Tecnologia" />
            </div>
            <div className={`about-image-item ${aboutSectionVisible ? 'slide-up delay-1' : ''}`}>
              <img src="/images/about-lab.jpg" alt="Laboratório" />
            </div>
            <div className={`about-image-item ${aboutSectionVisible ? 'slide-up delay-2' : ''}`}>
              <img src="/images/about-field.jpg" alt="Campo" />
            </div>
          </div>
        </div>
        <div className={`about-stats ${aboutSectionVisible ? 'slide-up' : ''}`}>
          <div className="service-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div className="service-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projetos Concluídos</div>
          </div>
          <div className="service-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Especialistas</div>
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
              <h3 dangerouslySetInnerHTML={{ __html: currentContent.contact.visitText }}></h3>
              <p>{currentContent.contact.locationText}</p>
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
      <section id="carreiras" className="careers" ref={careersSectionRef}>
        <div className="careers-content">
          <div className={`careers-image ${careersSectionVisible ? 'slide-in-left' : ''}`}>
            <img src="./images/RH-Industrial.jpg" alt="Trabalhe Conosco" />
          </div>
          <div className={`careers-text-container ${careersSectionVisible ? 'slide-in-right' : ''}`}>
            <div className="careers-text">
              <p className="section-subtitle">{currentContent.careers.subtitle}</p>
              <h3 className="careers-title-alt">{currentContent.careers.title}</h3>
              <p>{currentContent.careers.description}</p>
              <button className="cta-button">{currentContent.careers.ctaButton}</button>
            </div>
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
