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
          <h3 dangerouslySetInnerHTML={{ __html: currentContent.about.mainText }}></h3>
          <p>{currentContent.about.description}</p>
          <a href="#servicos" className="about-cta-link">
            {currentContent.about.ctaButton} <span className="arrow">→</span>
          </a>
        </div>
        <div className="about-images">
          <div className={`about-image-item ${isVisible ? 'slide-up' : ''}`}>
            <img src="/images/about-main.jpg" alt="Nossa Tecnologia" />
          </div>
          <div className={`about-image-item ${isVisible ? 'slide-up delay-1' : ''}`}>
            <img src="/images/about-lab.jpg" alt="Laboratório" />
          </div>
          <div className={`about-image-item ${isVisible ? 'slide-up delay-2' : ''}`}>
            <img src="/images/about-field.jpg" alt="Campo" />
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