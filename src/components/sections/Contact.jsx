import { useLanguage } from '../../contexts/LanguageContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Contact.css';

export default function Contact() {
  const { currentContent } = useLanguage();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contato" className="contact">
      <h2>{currentContent.contact.title}</h2>
      <div className="contact-content">
        <div className="contact-map-container" ref={ref}>
          <div className={`contact-map-text ${isVisible ? 'slide-up' : ''}`}>
            <h3>{currentContent.contact.subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: currentContent.contact.info.address }} />
          </div>
          <div className={`contact-map ${isVisible ? 'slide-right delay-1' : ''}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4422.5888645901605!2d-52.216284!3d-23.1709786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9492c525020072af%3A0x1c8b032c4393f4d0!2sBiobras%20Biodiesel%20S%2FA!5e1!3m2!1spt-BR!2sbr!4v1751943265377!5m2!1spt-BR!2sbr"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder={currentContent.contact.form.name} required />
          <input type="email" placeholder={currentContent.contact.form.email} required />
          <input type="tel" placeholder={currentContent.contact.form.phone} />
          <textarea placeholder={currentContent.contact.form.message} required></textarea>
          <button type="submit">{currentContent.contact.form.submit}</button>
        </form>
      </div>
    </section>
  );
} 