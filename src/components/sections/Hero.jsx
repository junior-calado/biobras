import { useLanguage } from '../../contexts/LanguageContext';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Button, Typography, Container } from '@mui/material';
import './Hero.css';

export default function Hero() {
  const { currentContent } = useLanguage();

  return (
    <section id="inicio" className="hero">
      <div className="hero-bg-image">
        <img src={`${import.meta.env.BASE_URL}images/img2.jpg`} alt="Hero" />
      </div>
      <Container maxWidth="lg" className="hero-content">
        <Typography variant="h1" component="h1" className="hero-title">
          {currentContent.home.title}
        </Typography>
        <Typography variant="h4" component="p" className="hero-subtitle">
          {currentContent.home.subtitle}
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          className="cta-button"
          sx={{
            backgroundColor: '#4CAF50',
            '&:hover': {
              backgroundColor: '#45a049',
            },
            padding: '1rem 2rem',
            fontSize: '1.2rem',
          }}
        >
          {currentContent.home.ctaButton}
        </Button>
      </Container>
      <div className="scroll-indicator">
        <KeyboardDoubleArrowDownIcon className="arrow" />
        <KeyboardDoubleArrowDownIcon className="arrow" />
        <KeyboardDoubleArrowDownIcon className="arrow" />
      </div>
    </section>
  );
} 