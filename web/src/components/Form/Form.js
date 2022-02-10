import { useState } from 'react';
import '../../styles/componentes/Form.scss';
import InputString from './InputString';
import InputFile from './InputFile';
import ShareButton from './ShareButton';
import Palette from './Palette';

const Form = (props) => {
  //COLAPSABLES
  const [collapsedDesign, setCollapsedDesign] = useState('');

  const handleCollapsedDesign = () => {
    if (collapsedDesign === '') {
      setCollapsedDesign('collapsed');
      setCollapsedFill('');
      setCollapsedShare('');
    } else {
      setCollapsedDesign('');
      setCollapsedFill('collapsed');
      setCollapsedShare('collapsed');
    }
  };

  const [collapsedFill, setCollapsedFill] = useState('collapsed');

  const handleCollapsedFill = () => {
    if (collapsedFill === '') {
      setCollapsedFill('collapsed');
      setCollapsedDesign('');
      setCollapsedShare('');
    } else {
      setCollapsedFill('');
      setCollapsedDesign('collapsed');
      setCollapsedShare('collapsed');
    }
  };

  const [collapsedShare, setCollapsedShare] = useState('collapsed');

  const handleCollapsedShare = () => {
    if (collapsedShare === '') {
      setCollapsedShare('collapsed');
      setCollapsedDesign('');
      setCollapsedFill('');
    } else {
      setCollapsedShare('');
      setCollapsedFill('collapsed');
      setCollapsedDesign('collapsed');
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
            <Palette
              handleInput={props.handleInput}
              data={props.data}
              number={'1'}
              className={'first__color'}
              checked={props.data.palette === '1' ? true : false}
            />
            <Palette
              handleInput={props.handleInput}
              data={props.data}
              number={'2'}
              className={'second__color'}
              checked={props.data.palette === '2' ? true : false}
            />
            <Palette
              handleInput={props.handleInput}
              data={props.data}
              number={'3'}
              className={'third__color'}
              checked={props.data.palette === '3' ? true : false}
            />
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

          <InputFile
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
            handleInput={props.handleInput}
          />

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
            className=" share-button"
            onClick={props.handleClickBtn}
          >
            <i className="far fa-address-card"></i>
            <span>Crear tarjeta</span>
          </button>
        </div>
        {props.dataAPI !== '' ? (
          <ShareButton
            dataAPI={props.dataAPI}
            handleClickBtn={props.handleClickBtn}
          />
        ) : (
          ''
        )}
      </fieldset>
    </form>
  );
};

export default Form;
