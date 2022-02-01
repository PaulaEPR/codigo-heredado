import logoFooter from '../images/logo-adalab.png';
import '../styles/componentes/Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <small className="footer__small">Awesome profile-cards @2021</small>
      <div className="footer__div">
        <a href="https://adalab.es" target="_blank" alt="logoLink">
          {' '}
          <img className="footer__div--img" src={logoFooter} alt="logo" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
