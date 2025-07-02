import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/sections/About';
import { useLanguage } from '../contexts/LanguageContext';

function Certificacao() {
  const { currentContent } = useLanguage();
  return <div><h2>{currentContent.sobre.certificacao.titulo}</h2><p>{currentContent.sobre.certificacao.texto}</p></div>;
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
    <div style={{ display: 'flex', minHeight: '80vh' }}>
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
      <main style={{ flex: 1, padding: '32px 48px' }}>
        {sections.find(sec => sec.key === active)?.component}
      </main>
    </div>
  );
} 