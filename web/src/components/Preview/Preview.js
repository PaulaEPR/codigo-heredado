import '../../styles/componentes/Preview.scss';
import Icon from './IconPreview';
import ImagePreview from './ImagePreview';
import TitlePreview from './TitlePreview';

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
          <TitlePreview
            name={props.data.name}
            job={props.data.job}
            number={props.data.palette}
          />
          <ImagePreview avatar={props.avatar} />
          <div className="preview__card--icons">
            <Icon
              href={`tel:${props.data.phone}` || ''}
              className={'linkPhone'}
              icon={'fas fa-mobile-alt'}
              number={props.data.palette}
            />
            <Icon
              href={
                `mailto:${props.data.email}` || 'mailto:someone@example.com'
              }
              className={'js-email'}
              icon={'far fa-envelope'}
              number={props.data.palette}
            />
            <Icon
              href={
                `https://www.linkedin.com/in/${props.data.linkedin}` ||
                'https://www.linkedin.com/'
              }
              className={'linkedin-js'}
              icon={'fab fa-linkedin-in'}
              number={props.data.palette}
            />
            <Icon
              href={
                `https://www.github.com/${props.data.github}` ||
                'https://www.github.com/'
              }
              className={'github-js'}
              icon={'fab fa-github-alt'}
              number={props.data.palette}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
