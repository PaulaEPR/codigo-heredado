import { useState } from 'react';
import '../../styles/componentes/Form.scss';
import InputString from './InputString';
import InputFile from './InputFile';

const Form = (props) => {
  //COLAPSABLES
  const [collapsedDesign, setCollapsedDesign] = useState('');

  const handleCollapsedDesign = () => {
    if (collapsedDesign === '') {
      setCollapsedDesign('collapsed');
    } else {
      setCollapsedDesign('');
    }
  };

  const [collapsedFill, setCollapsedFill] = useState('collapsed');

  const handleCollapsedFill = () => {
    if (collapsedFill === '') {
      setCollapsedFill('collapsed');
    } else {
      setCollapsedFill('');
    }
  };

  const [collapsedShare, setCollapsedShare] = useState('collapsed');

  const handleCollapsedShare = () => {
    if (collapsedShare === '') {
      setCollapsedShare('collapsed');
    } else {
      setCollapsedShare('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <fieldset className={`form__design form-js ${collapsedDesign}`}>
        <div
          className="form__design--sect form-title-js"
          onClick={handleCollapsedDesign}
        >
          <i className="far fa-object-ungroup"></i>
          <h2 className="form__design--title">Diseña</h2>
          <i className="fas fa-chevron-up js-arrow"></i>
        </div>
        <div className="form__design--container form-container-js">
          <label htmlFor="colores" className="form__design--subtitle">
            Colores
          </label>
          <ul className="form__design--list">
            <li className="list__palette first__color">
              <input
                type="radio"
                id="palette"
                className="list__radio js-input"
                name="palette"
                data-id="1"
                value="1"
                onChange={props.handleInput}
                checked={props.data.palette === '1'}
                //onClick={handleFirstPalette}
              />
              <div className="colorOne"></div>
              <div className="colorTwo"></div>
              <div className="colorThree"></div>
            </li>

            <li className="list__palette second__color">
              <input
                type="radio"
                id="palette"
                className="list__radio js-input"
                name="palette"
                data-id="2"
                value="2"
                onChange={props.handleInput}
                checked={props.data.palette === '2'}
                //onClick={handleSecondPalette}
              />
              <div className="colorOne"></div>
              <div className="colorTwo"></div>
              <div className="colorThree"></div>
            </li>

            <li className="list__palette third__color">
              <input
                type="radio"
                id="palette"
                className="list__radio js-input"
                name="palette"
                data-id="3"
                value="3"
                onChange={props.handleInput}
                checked={props.data.palette === '3'}
              />
              <div className="colorOne"></div>
              <div className="colorTwo"></div>
              <div className="colorThree"></div>
            </li>
          </ul>
        </div>
      </fieldset>

      <fieldset className={`form__fill form-js ${collapsedFill}`}>
        <div
          className="form__fill--sect form-title2-js "
          onClick={handleCollapsedFill}
        >
          <i className="far fa-keyboard"></i>
          <h2 className="form__fill--title">Rellena</h2>
          <i className="fas fa-chevron-up js-arrow js-arrow-down"></i>
        </div>
        <div className="form__fill--div form-container-js">
          <InputString
            handleInput={props.handleInput}
            value={props.data.name}
            name={'name'}
            label={'Nombre completo'}
            placeholder={'Ej: Sally Jill'}
            type={'text'}
            required={true}
          />
          <InputString
            handleInput={props.handleInput}
            value={props.data.job}
            name={'job'}
            label={'Puesto'}
            placeholder={'Ej: Front-end unicorn'}
            type={'text'}
            required={true}
          />

          <InputFile avatar={props.avatar} updateAvatar={props.updateAvatar}/>
          
          <InputString
            handleInput={props.handleInput}
            value={props.data.email}
            name={'email'}
            label={'Email'}
            placeholder={'Ej: nombre.apellidos@mail.com'}
            type={'email'}
            pattern={
              "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
            }
            required={true}
          />
          <InputString
            handleInput={props.handleInput}
            value={props.data.phone}
            name={'phone'}
            label={'Teléfono'}
            placeholder={'Ej: 123456789'}
            type={'tel'}
          />
          <InputString
            handleInput={props.handleInput}
            value={props.data.linkedin}
            name={'linkedin'}
            label={'Linkedin'}
            placeholder={'Ej: ada.lovelace'}
            type={'text'}
            required={true}
          />
          <InputString
            handleInput={props.handleInput}
            value={props.data.github}
            name={'github'}
            label={'Github'}
            placeholder={'Ej: Ada-Lovelace'}
            type={'text'}
            required={true}
          />
        </div>
      </fieldset>
      <fieldset className={`form__share form-js ${collapsedShare}`}>
        <div
          className="form__share--sect form-title3-js "
          onClick={handleCollapsedShare}
        >
          <i className="fa fa-share-alt"></i>
          <h2 className="form__share--title">Comparte</h2>
          <i className="fas fa-chevron-up js-arrow js-arrow-down"></i>
        </div>
        <div className="form__share--button form-container-js">
          <button
            type="submit"
            href="#"
            id="button-card"
            className="unabled share-button"
            disabled
          >
            <i className="far fa-address-card"></i>
            <span>Crear tarjeta</span>
          </button>
        </div>
        <div className="form__share--created hidden" id="share-card">
          <h4>La tarjeta ha sido creada:</h4>
          <a href="#" className="card-link" target="_blank"></a>
          <a href="#" className="twitter" target="_blank">
            <i className="fab fa-twitter"></i>
            Compartir en twitter
          </a>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
