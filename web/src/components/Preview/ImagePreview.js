import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/Vilma.jpg';

function ImagePreview(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div
      className="preview__card--img js__profile-image"
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

ImagePreview.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default ImagePreview;
