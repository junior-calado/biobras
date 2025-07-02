import { useLanguage } from '../../contexts/LanguageContext';
import './Services.css';

export default function Services() {
  const { currentContent } = useLanguage();

  return (
    <section id="servicos" className="services">
      <div className="services-container">
        <h2>{currentContent.services.title}</h2>
        <div className="services-grid">
          {currentContent.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {index === 0 && <a href="/negocios?sec=area" className="service-link">Saiba mais</a>}
                {index === 1 && <a href="/negocios?sec=biodiesel" className="service-link">Saiba mais</a>}
                {index === 2 && <a href="/negocios?sec=higiene" className="service-link">Saiba mais</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 