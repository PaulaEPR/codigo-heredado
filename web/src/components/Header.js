import logoHeader from '../images/logo-awesome-profile-cards.svg';
import '../styles/componentes/Header.scss'

const Header = () => {
  return (
<header className="header extraClass">
        <a href="./index.html">
          <img
            className="header__logo"
            src={logoHeader}
            alt="logo-awesome-cards"
          />
        </a>
      </header>
  );
}

export default Header