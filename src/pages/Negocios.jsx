import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function AreaAtuacao() {
  const { currentContent } = useLanguage();
  return <div><h2>{currentContent.negocios.areaAtuacao.titulo}</h2><p>{currentContent.negocios.areaAtuacao.texto}</p></div>;
}
function Biodiesel() {
  const { currentContent } = useLanguage();
  return <div><h2>{currentContent.negocios.biodiesel.titulo}</h2><p>{currentContent.negocios.biodiesel.texto}</p></div>;
}
function HigieneLimpeza() {
  const { currentContent } = useLanguage();
  return <div><h2>{currentContent.negocios.higieneLimpeza.titulo}</h2><p>{currentContent.negocios.higieneLimpeza.texto}</p></div>;
}

export default function Negocios() {
  const location = useLocation();
  const { currentContent } = useLanguage();
  const getSectionFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('sec') || 'area';
  };
  const [active, setActive] = useState(getSectionFromQuery());

  useEffect(() => {
    setActive(getSectionFromQuery());
  }, [location.search]);

  const sections = [
    { key: 'area', label: currentContent.negocios.areaAtuacao.titulo, component: <AreaAtuacao /> },
    { key: 'biodiesel', label: currentContent.negocios.biodiesel.titulo, component: <Biodiesel /> },
    { key: 'higiene', label: currentContent.negocios.higieneLimpeza.titulo, component: <HigieneLimpeza /> },
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