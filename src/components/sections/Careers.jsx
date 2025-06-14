import { useLanguage } from '../../contexts/LanguageContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import './Careers.css';

export default function Careers() {
  const { currentContent } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();
  const navigate = useNavigate();

  const handleVagasClick = () => {
    navigate('/vagas');
  };

  return (
    <section id="carreiras" className="careers" ref={ref}>
      <div className="careers-content">
        <div className={`careers-image ${isVisible ? 'slide-in-left' : ''}`}>
          <img src={`${import.meta.env.BASE_URL}images/RH-Industrial.jpg`} alt="Trabalhe Conosco" />
        </div>
        <div className={`careers-text-container ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="careers-text">
            <p className="careers-label">TRABALHE CONOSCO</p>
            <h3 className="careers-main-title">
              Reinvente o futuro com a <span>gente.</span>
            </h3>
            <p className="careers-subtitle">Confira nossas oportunidades</p>
            <Button onClick={handleVagasClick}>QUERO FAZER PARTE</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 