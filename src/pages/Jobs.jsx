import { useState } from 'react';
import Header from '../components/layout/Header';
import './Jobs.css';
import { useLanguage } from '../contexts/LanguageContext';

const vagas = [
  {
    id: 1,
    titulo: '[Banco de Talentos] Analista de Suporte',
    local: 'Maringá - PR',
    tipo: 'Presencial',
    niveis: ['Pleno'],
    pcd: true,
    salario: false,
    publicada: 'há 8 meses',
    descricao: 'Venha fazer parte do time de talentos! Somos uma equipe de mais de 200 talentos, unidos por um propósito comum: entregar qualidade com transparência e comprometimento. Nosso trabalho...',
    detalhes: 'Atendimento ao cliente, suporte técnico, resolução de problemas, documentação e treinamento de usuários.',
    requisitos: [
      'Formação em áreas de TI',
      'Boa comunicação',
      'Experiência com suporte ao usuário',
      'Conhecimento em sistemas operacionais'
    ]
  },
  {
    id: 2,
    titulo: '[Banco de Talentos] Programador(a) Fullstack - Java',
    local: 'Maringá - PR',
    tipo: 'Híbrido',
    niveis: ['Junior', 'Pleno', 'Sênior', 'Especialista'],
    pcd: true,
    salario: true,
    publicada: 'há 1 ano',
    descricao: 'Desenvolvimento de aplicações web, manutenção de sistemas existentes, participação em projetos inovadores e colaboração com equipes multidisciplinares.',
    detalhes: 'Desenvolvimento fullstack, integração de APIs, versionamento de código, testes automatizados e participação em code reviews.',
    requisitos: [
      'Experiência com Java e Spring',
      'Conhecimento em React ou Angular',
      'Banco de dados SQL',
      'Versionamento com Git'
    ]
  },
  {
    id: 3,
    titulo: 'Banco de Talentos | Não encontrou vaga com seu perfil? Se cadastre aqui!',
    local: 'Maringá - PR',
    tipo: 'Híbrido',
    niveis: [],
    pcd: false,
    salario: true,
    publicada: 'há 2 anos',
    descricao: 'Se você não encontrou uma vaga com seu perfil, cadastre-se em nosso banco de talentos para futuras oportunidades!',
    detalhes: 'Cadastro para futuras oportunidades em diversas áreas da empresa.',
    requisitos: [
      'Desejo de fazer parte do nosso time',
      'Proatividade',
      'Vontade de aprender'
    ]
  }
];

export default function Jobs() {
  const { currentContent } = useLanguage();
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [open, setOpen] = useState(false);

  // Centralizar o card solitário na última linha
  const vagasGrid = () => {
    const items = vagas.map((vaga) => (
      <div className="job-card" key={vaga.id}>
        <div className="job-card-content">
          <h3 className="job-title">{vaga.titulo}</h3>
          <div className="job-info-row">
            <span className="job-icon">📍</span>
            <span>{vaga.local}</span>
            {vaga.salario && <span className="job-icon">💲</span>}
            {vaga.pcd && <span className="job-icon">♿ {currentContent.jobs.pcd}</span>}
          </div>
          <div className="job-chips">
            <span className="job-chip job-chip-main">{vaga.tipo}</span>
            {vaga.niveis.map((n, i) => (
              <span className="job-chip" key={i}>{n}</span>
            ))}
          </div>
          <div className="job-date">Postada {vaga.publicada}</div>
          <div className="job-desc">{vaga.descricao.length > 180 ? vaga.descricao.slice(0, 180) + '...' : vaga.descricao}</div>
        </div>
        <div className="job-card-actions">
          <button className="standard-button" style={{width: '100%'}} onClick={() => { setVagaSelecionada(vaga); setOpen(true); }}>Ver Vaga</button>
        </div>
      </div>
    ));
    if (items.length % 2 !== 0) {
      items.push(<div className="job-card job-card-empty" key="empty" aria-hidden="true"></div>);
    }
    return items;
  };

  return (
    <div className="jobs-page custom-jobs-bg">
      <Header />
      {/* Banner Trabalhe Conosco */}
      <section className="jobs-banner">
        <div className="jobs-banner-bg"></div>
        <div className="jobs-banner-content">
          <h2>{currentContent.jobs.bannerTitle}</h2>
          <p>{currentContent.jobs.bannerSubtitle}</p>
          <a className="jobs-banner-btn standard-button" href="#" target="_blank" rel="noopener noreferrer">{currentContent.jobs.bannerButton}</a>
        </div>
      </section>
      <main className="jobs-main custom-jobs-main">
        <h1 className="jobs-title">{currentContent.jobs.title}</h1>
        <div className="jobs-subtitle">{currentContent.jobs.subtitle.replace('{count}', vagas.length)}</div>
        <div className="jobs-divider"></div>
        <div className="jobs-grid">{vagasGrid()}</div>

        {/* Modal simples */}
        {open && (
          <div className="job-modal-bg" onClick={() => setOpen(false)}>
            <div className="job-modal" onClick={e => e.stopPropagation()}>
              <button className="job-modal-close" onClick={() => setOpen(false)}>×</button>
              <h2>{vagaSelecionada.titulo}</h2>
              <div className="job-modal-chips">
                <span className="job-chip job-chip-main">{vagaSelecionada.tipo}</span>
                {vagaSelecionada.niveis.map((n, i) => (
                  <span className="job-chip" key={i}>{n}</span>
                ))}
                <span className="job-chip job-chip-grey">{vagaSelecionada.local}</span>
                {vagaSelecionada.salario && <span className="job-chip job-chip-grey">💲 {currentContent.jobs.salary}</span>}
                {vagaSelecionada.pcd && <span className="job-chip job-chip-grey">♿ {currentContent.jobs.pcd}</span>}
              </div>
              <div className="job-modal-section">
                <h4>{currentContent.jobs.description}</h4>
                <p>{vagaSelecionada.detalhes}</p>
              </div>
              <div className="job-modal-section">
                <h4>{currentContent.jobs.requirements}</h4>
                <ul>
                  {vagaSelecionada.requisitos.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              <div style={{textAlign: 'right'}}>
                <button className="standard-button" style={{minWidth: 180}} >{currentContent.jobs.apply}</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 