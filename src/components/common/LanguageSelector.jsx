import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <button
        className={`language-btn ${language === 'pt' ? 'active' : ''}`}
        onClick={() => setLanguage('pt')}
      >
        <img src="./images/flags/brasil.png" alt="Português" />
        <div className="image-attribution">
          <a href="https://www.flaticon.com/br/icones-gratis/brasil" title="brasil ícones">
            Brasil ícones criados por Freepik - Flaticon
          </a>
        </div>
      </button>
      <button
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        <img src="./images/flags/estados-unidos.png" alt="English" />
        <div className="image-attribution">
          <a href="https://www.flaticon.com/br/icones-gratis/estados-unidos" title="estados unidos ícones">
            Estados unidos ícones criados por Freepik - Flaticon
          </a>
        </div>
      </button>
      <button
        className={`language-btn ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
      >
        <img src="./images/flags/espanha.png" alt="Español" />
        <div className="image-attribution">
          <a href="https://www.flaticon.com/br/icones-gratis/espanha" title="espanha ícones">
            Espanha ícones criados por Freepik - Flaticon
          </a>
        </div>
      </button>
    </div>
  );
} 