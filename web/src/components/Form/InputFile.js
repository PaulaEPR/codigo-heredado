import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/Vilma.jpg';

const InputFile = (props) => {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <>
      <label className="label form__fill--prftext">Imagen de perfil</label>

      <div className="form__image">
        <label htmlFor="photo" className="form__btnimg js__profile-trigger">
          Añadir imagen
        </label>
        <input
          type="file"
          ref={myFileField}
          className="js__profile-upload-btn hidden js-input"
          name="photo"
          id="photo"
          required
          onChange={uploadImage}
        />
        <div className="form__square js__profile-preview" style={{ backgroundImage: `url(${avatar})` }}></div>
      </div>
    </>
  );
};

InputFile.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default InputFile;
