import logo from '../images/logo-awesome-profile-cards.svg';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className="header header">
        <img className="header__logo" src={logo} alt="logo-awesome-cards" />
      </header>

      <main className="main">
        <section className="main__information">
          <h1 className="main__informationTitle">Crea tu tarjeta de visita</h1>
          <p className="main__informationSubtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>

        <section className="main__icons">
          <div className="main__iconsGroup">
            <i className="main__iconsItem far fa-object-ungroup"></i>
            <span className="main__iconsSubtitle">Diseña</span>
          </div>
          <div className="main__iconsGroup">
            <i className="main__iconsItem  far fa-keyboard"></i>
            <span className="main__iconsSubtitle">Rellena</span>
          </div>
          <div className="main__iconsGroup">
            <i className="main__iconsItem fa fa-share-alt"></i>
            <span className="main__iconsSubtitle">Comparte</span>
          </div>
        </section>
        <div className="main__buttonContainer">
          <div className="main__button">
              <Link className="main__buttonText" to='/card' >
              Comenzar
              </Link>
            {/* <a className="main__buttonText" href="./card-generator.html">
              Comenzar
            </a> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
