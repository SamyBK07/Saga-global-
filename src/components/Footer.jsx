const Footer = () => {
  return (
    <footer className="footer">

      <h3>Contactez Saga Globale</h3>
      <p>Une question ? Nous sommes disponibles.</p>

      <div className="contact-info">
        <p>📧 globalsaga75@gmail.com</p>
        <p>📞 01 41 69 71 69</p>
        <p>💬 WhatsApp : 01 52 08 46 33</p>
      </div>

      <div className="contact-buttons">
        <a href="tel:+2290141697169">
          Appeler 01 41 69 71 69
        </a>

        <a href="tel:+2290152084633">
          Appeler 01 52 08 46 33
        </a>

        <a
          href="https://wa.me/2290141697169"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>

      <p className="copyright">
        © 2026 Saga Globale
      </p>

    </footer>
  );
};

export default Footer;
