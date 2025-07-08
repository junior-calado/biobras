import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/sections/About';
import { useLanguage } from '../contexts/LanguageContext';
import ISCCLogo from '../../public/images/ISCC-blue-logo.png';
import './Certificacao.css';

function Certificacao() {
  return (
    <div className="certification-hero">
      <div className="certification-logo-badge">
        <div className="glass-badge">
          <img src={ISCCLogo} alt="ISCC EU Logo" />
        </div>
      </div>
      <div className="certification-info-block">
        <h1>Nossa certificação é a <span style={{color:'#1abc9c'}}>ISCC EU</span></h1>
        <h2>O que é o Certificado ISCC EU?</h2>
        <p>
          O ISCC EU (International Sustainability and Carbon Certification – European Union) é um sistema de certificação reconhecido pela União Europeia, voltado para garantir que biomassa e biocombustíveis utilizados no território europeu atendam aos critérios de sustentabilidade ambiental, social e de redução de emissões de gases de efeito estufa, conforme as exigências da Diretiva Europeia de Energias Renováveis (RED II).
        </p>
        <h3 style={{marginTop:'1.5em', color:'#1abc9c'}}>Objetivos do ISCC EU</h3>
        <ul className="certification-benefits">
          <li><span className="icon">🔗</span> Garantir a rastreabilidade completa dos produtos desde a origem (fazenda, indústria) até o destino final.</li>
          <li><span className="icon">🌱</span> Comprovar a sustentabilidade das matérias-primas utilizadas na produção de biocombustíveis e bioenergia.</li>
          <li><span className="icon">💨</span> Assegurar a redução de emissões de gases de efeito estufa em relação aos combustíveis fósseis.</li>
          <li><span className="icon">🛡️</span> Proteger o meio ambiente, evitando o uso de áreas de alto valor de biodiversidade ou com grandes estoques de carbono.</li>
        </ul>
        <a className="certification-link" href="#" target="_blank" rel="noopener noreferrer">
          <span className="icon">📄</span> Baixar Certificado
        </a>
      </div>
    </div>
  );
}
function Sustentabilidade() {
  const { currentContent } = useLanguage();
  return <div><h2>{currentContent.sobre.sustentabilidade.titulo}</h2><p>{currentContent.sobre.sustentabilidade.texto}</p></div>;
}
function OndeEstamos() {
  const { currentContent } = useLanguage();
  return <div><h2>{currentContent.sobre.ondeEstamos.titulo}</h2><p>{currentContent.sobre.ondeEstamos.texto}</p></div>;
}

export default function SobreBiobras() {
  const location = useLocation();
  const { currentContent } = useLanguage();
  const getSectionFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('sec') || 'historia';
  };
  const [active, setActive] = useState(getSectionFromQuery());

  useEffect(() => {
    setActive(getSectionFromQuery());
  }, [location.search]);

  const sections = [
    { key: 'historia', label: currentContent.sobre.historia.label, component: <About /> },
    { key: 'certificacao', label: currentContent.sobre.certificacao.titulo, component: <Certificacao /> },
    { key: 'sustentabilidade', label: currentContent.sobre.sustentabilidade.titulo, component: <Sustentabilidade /> },
    { key: 'onde', label: currentContent.sobre.ondeEstamos.titulo, component: <OndeEstamos /> },
  ];

  return (
    <div className="page-content" style={{ display: 'flex', minHeight: '80vh' }}>
      <aside style={{ minWidth: 220, borderRight: '1px solid #eee', padding: '32px 16px 0 0' }}>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {sections.map(sec => (
              <li key={sec.key}>
                <button onClick={() => setActive(sec.key)} style={{ background: 'none', border: 'none', color: active === sec.key ? '#1abc9c' : '#222', fontWeight: active === sec.key ? 'bold' : 'normal', fontSize: 18, margin: '12px 0', cursor: 'pointer', textAlign: 'left' }}>{sec.label}</button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '32px 2rem 2rem 2rem', minHeight: '60vh' }}>
        {sections.find(sec => sec.key === active)?.component}
      </main>
    </div>
  );
} 