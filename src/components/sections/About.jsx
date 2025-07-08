import { useLanguage } from '../../contexts/LanguageContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';
import { useLocation } from 'react-router-dom';

export default function About() {
  const { currentContent } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();
  const location = typeof useLocation === 'function' ? useLocation() : { pathname: '' };
  const isHistoriaPage = location && location.pathname && location.pathname.includes('sobre');

  // Texto detalhado para a página "Nossa História"
  const historiaCompleta = `
    Fundada em 2021, a Biobras nasceu com o propósito de transformar o segmento de sebo bovino, oferecendo matéria-prima de alta qualidade para indústrias nacionais e internacionais. Nossa trajetória é marcada por uma estrutura sólida, investimentos em tecnologia e um compromisso inabalável com a eficiência, a responsabilidade socioambiental e a transparência em todas as etapas do processo.
    <br/><br/>
    Ao longo dos anos, expandimos nossas operações, conquistando a confiança de parceiros e clientes graças à excelência dos nossos produtos e à ética em nossos relacionamentos. Acreditamos que o crescimento sustentável só é possível quando alinhado à inovação e ao respeito ao meio ambiente.
    <br/><br/>
    Agora, avançamos para um novo capítulo: a produção de biodiesel. Com essa iniciativa, reafirmamos nosso compromisso com soluções energéticas limpas, contribuindo para um futuro mais verde e sustentável. A Biobras segue evoluindo, sempre guiada pela paixão em transformar desafios em oportunidades e gerar valor para a sociedade.
  `;

  if (isHistoriaPage) {
    return (
      <section id="sobre" className={`about about-historia ${isVisible ? 'fade-in' : ''}`} ref={ref}>
        <div className="historia-layout" style={{display: 'flex', gap: '2.5rem', alignItems: 'flex-start', background: 'linear-gradient(120deg, #f8fafc 60%, #e6f7f1 100%)', borderRadius: 18, boxShadow: '0 4px 32px #0001', padding: '3.5rem 2rem', margin: '0 auto', maxWidth: 1200}}>
          <div className={`historia-texto ${isVisible ? 'slide-up' : ''}`}
               style={{flex: 2, fontSize: '1.18rem', lineHeight: 1.7, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px #1abc9c22', padding: '2.5rem', marginRight: '2rem', borderLeft: '6px solid #1abc9c', minWidth: 0}}>
            <h2 style={{color: '#1abc9c', fontWeight: 700, fontSize: '2.2rem', marginBottom: 24, letterSpacing: '-1px'}}>Nossa História</h2>
            <div dangerouslySetInnerHTML={{ __html: historiaCompleta }} />
          </div>
          <div className="historia-imagens" style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', minWidth: 0}}>
            {["img.jpg", "img1.jpg", "img2.jpg"].map((img, idx) => (
              <div key={img} style={{width: '100%', maxWidth: 320, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px #1abc9c22', transition: 'transform 0.2s, box-shadow 0.2s', background: '#f6f6f6'}}
                   className="historia-img-hover">
                <img src={`${import.meta.env.BASE_URL}images/About/${img}`} alt={['Fundação da Biobras', 'Laboratório Biobras', 'Campo e Sustentabilidade'][idx]} style={{width: '100%', display: 'block', borderRadius: 14, objectFit: 'cover', aspectRatio: '4/3'}} />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .historia-layout { flex-direction: column; padding: 2rem 0.5rem !important; gap: 1.5rem !important; }
            .historia-texto { margin-right: 0 !important; padding: 1.5rem !important; }
            .historia-imagens { flex-direction: row !important; gap: 0.7rem !important; justify-content: center; }
            .historia-imagens > div { max-width: 120px !important; }
          }
          @media (max-width: 600px) {
            .historia-layout { padding: 0.5rem 0.1rem !important; }
            .historia-texto { font-size: 1rem !important; padding: 1rem !important; }
          }
          .historia-img-hover:hover { transform: scale(1.04); box-shadow: 0 8px 32px #1abc9c33; }
        `}</style>
      </section>
    );
  }

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
        <div className="about-mosaic">
          <div className={`mosaic-item mosaic-item-large${isVisible ? ' slide-up' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}images/About/img.jpg`} alt="Nossa Tecnologia" />
            <span className="image-credit-overlay">
              <a href="https://br.freepik.com/fotos-gratis/homem-de-angulo-baixo-no-posto-de-gasolina_60412382.htm" target="_blank" rel="noopener noreferrer">Imagem de freepik</a>
            </span>
          </div>
          <div className={`mosaic-item mosaic-item-tall${isVisible ? ' slide-up' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}images/About/img1.jpg`} alt="Laboratório" />
            <span className="image-credit-overlay">
              <a href="https://br.freepik.com/fotos-gratis/vista-frontal-de-uma-cientista-segurando-um-tubo-de-ensaio_11706631.htm" target="_blank" rel="noopener noreferrer">Imagem de freepik</a>
            </span>
          </div>
          <div className={`mosaic-item mosaic-item-wide${isVisible ? ' slide-up' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}images/About/img2.jpg`} alt="Campo" />
            <span className="image-credit-overlay">
              <a href="https://br.freepik.com/vetores-gratis/ilustracao-de-biocombustivel-de-design-plano_26252312.htm" target="_blank" rel="noopener noreferrer">Imagem de freepik</a>
            </span>
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