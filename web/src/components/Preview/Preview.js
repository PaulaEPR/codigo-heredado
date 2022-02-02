import '../../styles/componentes/Preview.scss';
import Icon from './Icon';
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
          <ImagePreview avatar={props.avatar} />
          <div className="preview__card--icons">
            <Icon
              href={`tel:${props.data.phone}` || ''}
              className={'linkPhone'}
              icon={'fas fa-mobile-alt'}
            />
            <Icon
              href={
                `mailto:${props.data.email}` || 'mailto:someone@example.com'
              }
              className={'js-email'}
              icon={'far fa-envelope'}
            />
            <Icon
              href={
                `https://www.linkedin.com/in/${props.data.linkedin}` ||
                'https://www.linkedin.com/'
              }
              className={'linkedin-js'}
              icon={'fab fa-linkedin-in'}
            />
            <Icon
              href={
                `https://www.github.com/${props.data.github}` ||
                'https://www.github.com/'
              }
              className={'github-js'}
              icon={'fab fa-github-alt'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
