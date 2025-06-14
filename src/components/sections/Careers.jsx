import { useLanguage } from '../../contexts/LanguageContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Careers.css';

export default function Careers() {
  const { currentContent } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="carreiras" className="careers" ref={ref}>
      <div className="careers-content">
        <div className={`careers-image ${isVisible ? 'slide-in-left' : ''}`}>
          <img src="./images/RH-Industrial.jpg" alt="Trabalhe Conosco" />
        </div>
        <div className={`careers-text-container ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="careers-text">
            <p className="careers-label">TRABALHE CONOSCO</p>
            <h3 className="careers-main-title">
              Reinvente o futuro com a <span>gente.</span>
            </h3>
            <p className="careers-subtitle">Confira nossas oportunidades</p>
            <button className="careers-cta-button">QUERO FAZER PARTE →</button>
          </div>
        </div>
      </div>
    </section>
  );
} 