import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Nous contacter</p>
      <div className="contacts">
        <a href="tel:+22912345678"><FaPhone /> Téléphone</a>
        <a href="https://wa.me/22912345678"><FaWhatsapp /> WhatsApp</a>
        <a href="https://facebook.com/tonpage"><FaFacebook /> Facebook</a>
        <a href="mailto:contact@sagaglobal.com"><FaEnvelope /> Email</a>
      </div>
    </footer>
  );
}

export default Footer;