import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

function Vegetal() {
  const { currentContent } = useLanguage();
  return (
    <div className="info-block">
      <h2>{currentContent.fornecedor.vegetal.titulo}</h2>
      <h3 className="subtitle">{currentContent.fornecedor.vegetal.subtitulo}</h3>
      <p>{currentContent.fornecedor.vegetal.texto}</p>
      <ul className="styled-list">
        <li>{currentContent.fornecedor.vegetal.lista1}</li>
        <li>{currentContent.fornecedor.vegetal.lista2}</li>
      </ul>
      <div className="info-extra">
        <h4>{currentContent.fornecedor.vegetal.vantagensTitulo}</h4>
        <ul className="styled-list">
          <li>{currentContent.fornecedor.vegetal.vantagem1}</li>
          <li>{currentContent.fornecedor.vegetal.vantagem2}</li>
          <li>{currentContent.fornecedor.vegetal.vantagem3}</li>
        </ul>
      </div>
    </div>
  );
}
function Animal() {
  const { currentContent } = useLanguage();
  return (
    <div className="info-block">
      <h2>{currentContent.fornecedor.animal.titulo}</h2>
      <h3 className="subtitle">{currentContent.fornecedor.animal.subtitulo}</h3>
      <p>{currentContent.fornecedor.animal.texto}</p>
      <ul className="styled-list">
        <li>{currentContent.fornecedor.animal.lista1}</li>
      </ul>
      <div className="info-extra">
        <h4>{currentContent.fornecedor.animal.infoTitulo}</h4>
        <ul className="styled-list">
          <li>{currentContent.fornecedor.animal.info1}</li>
          <li>{currentContent.fornecedor.animal.info2}</li>
        </ul>
      </div>
    </div>
  );
}
function Misto() {
  const { currentContent } = useLanguage();
  return (
    <div className="info-block">
      <h2>{currentContent.fornecedor.misto.titulo}</h2>
      <h3 className="subtitle">{currentContent.fornecedor.misto.subtitulo}</h3>
      <p>{currentContent.fornecedor.misto.texto}</p>
      <ul className="styled-list">
        <li>{currentContent.fornecedor.misto.lista1}</li>
      </ul>
      <div className="info-extra">
        <h4>{currentContent.fornecedor.misto.diferenciaisTitulo}</h4>
        <ul className="styled-list">
          <li>{currentContent.fornecedor.misto.diferencial1}</li>
          <li>{currentContent.fornecedor.misto.diferencial2}</li>
          <li>{currentContent.fornecedor.misto.diferencial3}</li>
        </ul>
      </div>
    </div>
  );
}

export default function Fornecedor() {
  const location = useLocation();
  const { currentContent } = useLanguage();
  const getSectionFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('sec') || 'vegetal';
  };
  const [active, setActive] = useState(getSectionFromQuery());

  useEffect(() => {
    setActive(getSectionFromQuery());
  }, [location.search]);

  const sections = [
    { key: 'vegetal', label: currentContent.fornecedor.vegetal.label, component: <Vegetal /> },
    { key: 'animal', label: currentContent.fornecedor.animal.label, component: <Animal /> },
    { key: 'misto', label: currentContent.fornecedor.misto.label, component: <Misto /> },
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