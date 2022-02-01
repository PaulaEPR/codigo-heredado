import '../../styles/componentes/Preview.scss';
import ImagePreview from './ImagePreview';

const Preview = (props) => {
  return (
    <section className="preview">
    <button className="preview__button" type="reset" onClick={props.resetBtn}>
      <span>
        <i className="far fa-trash-alt"></i>
      </span>
      Reset
    </button>
    <div className="preview__background">
      <div className="preview__card">
        <div className="preview__card--name">
          <div className="line-palette js__line-palette"></div>
          <h3 className="preview__card--name name">
            {props.data.name || 'Vilma picatecla'}
          </h3>
          <h4 className=" preview__card--name profession">
            {props.data.job || 'Front end'}
          </h4>
        </div>
        <ImagePreview avatar={props.avatar}/>
        <div className="preview__card--icons">
          <div className="card-icons js-iconBorder">
            <a className="linkPhone" href={`tel:${props.data.phone}` || ''}>
              <i className="fas fa-mobile-alt js-icon"></i>
            </a>
          </div>
          <div className="card-icons js-iconBorder">
            <a
              href={
                `mailto:${props.data.email}` || 'mailto:someone@example.com'
              }
              className="js-email"
            >
              <i className="far fa-envelope js-icon"></i>
            </a>
          </div>
          <div className="card-icons js-iconBorder">
            <a
              className="linkedin-js"
              href={
                `https://www.linkedin.com/in/${props.data.linkedin}` ||
                'https://www.linkedin.com/'
              }
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in js-icon"></i>
            </a>
          </div>
          <div className="card-icons js-iconBorder">
            <a
              className="github-js"
              href={
                `https://www.github.com/${props.data.github}` ||
                'https://www.github.com/'
              }
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt js-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Preview