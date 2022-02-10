import logoHeader from '../images/logo-awesome-profile-cards.svg';
import '../styles/componentes/Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<header className="header extraClass">
        <Link to="/">
          <img
            className="header__logo"
            src={logoHeader}
            alt="logo-awesome-cards"
          />
        </Link>
      </header>
  );
}

export default Header