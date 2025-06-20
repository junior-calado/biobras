import { useLanguage } from '../../contexts/LanguageContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';

export default function About() {
  const { currentContent } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="sobre" className={`about ${isVisible ? 'fade-in' : ''}`} ref={ref}>
      <h2>{currentContent.about.title}</h2>
      <div className="about-content">
        <div className={`about-text ${isVisible ? 'slide-up' : ''}`}>
          <h3 dangerouslySetInnerHTML={{ __html: currentContent.about.shortMainText }}></h3>
          <p>{currentContent.about.shortDescription}</p>
          <a href="#servicos" className="about-cta-link">
            {currentContent.about.ctaButton} 
            <span className={`arrow${isVisible ? ' slide-right' : ''}`} style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        <div className="about-images">
          <div className={`about-image-item ${isVisible ? 'slide-up' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}images/About/img.jpg`} alt="Nossa Tecnologia" />
            <a href="https://br.freepik.com/fotos-gratis/homem-de-angulo-baixo-no-posto-de-gasolina_60412382.htm">Imagem de freepik</a>
          </div>
          <div className={`about-image-item ${isVisible ? 'slide-up delay-1' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}images/About/img1.jpg`} alt="Laboratório" />
            <a href="https://br.freepik.com/fotos-gratis/vista-frontal-de-uma-cientista-segurando-um-tubo-de-ensaio_11706631.htm" className="image-credit">Imagem de freepik</a>
          </div>
          <div className={`about-image-item ${isVisible ? 'slide-up delay-2' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}images/About/img2.jpg`} alt="Campo" />
            <a href="https://br.freepik.com/vetores-gratis/ilustracao-de-biocombustivel-de-design-plano_26252312.htm">Imagem de freepik</a>
          </div>
        </div>
      </div>
      <div className={`about-stats ${isVisible ? 'slide-up' : ''}`}>
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
  );
} 