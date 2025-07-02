import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Careers from '@/components/sections/Careers';
import Jobs from '@/pages/Jobs';
import Footer from '@/components/layout/Footer';
import SobreBiobras from './pages/SobreBiobras';
import Negocios from './pages/Negocios';
import Fornecedor from './pages/Fornecedor';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Careers />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router basename="/biobras">
          <ScrollToTop />
          <div className="app">
            <Helmet>
              <title>BioBras - Soluções em Biodisel</title>
              <meta name="description" content="BioBras: Pioneiros em biotecnologia sustentável, transformando recursos naturais em soluções inovadoras para um futuro mais verde." />
              <meta name="keywords" content="biotecnologia, sustentabilidade, energia renovável, pesquisa e desenvolvimento, consultoria técnica, análises laboratoriais" />
              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://biobras.com/" />
              <meta property="og:title" content="BioBras - Soluções em Biotecnologia Sustentável" />
              <meta property="og:description" content="Pioneiros em biotecnologia sustentável, transformando recursos naturais em soluções inovadoras." />
              <meta property="og:image" content="https://biobras.com/images/og-image.jpg" />
              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://biobras.com/" />
              <meta property="twitter:title" content="BioBras - Soluções em Biotecnologia Sustentável" />
              <meta property="twitter:description" content="Pioneiros em biotecnologia sustentável, transformando recursos naturais em soluções inovadoras." />
              <meta property="twitter:image" content="https://biobras.com/images/twitter-image.jpg" />
              {/* Canonical URL */}
              <link rel="canonical" href="https://biobras.com/" />
            </Helmet>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vagas" element={<Jobs />} />
                <Route path="/sobre" element={<SobreBiobras />} />
                <Route path="/negocios" element={<Negocios />} />
                <Route path="/fornecedor" element={<Fornecedor />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
