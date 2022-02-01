const ShareButton = (props) => {
  return (
    <>
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
      <div className="form__share--created" id="share-card">
        <h4>La tarjeta ha sido creada:</h4>
        <a
          href={props.dataAPI.cardURL}
          className="card-link"
          target="_blank"
        ></a>
        <a href="#" className="twitter" target="_blank">
          <i className="fab fa-twitter"></i>
          Compartir en twitter
        </a>
      </div>
    </>
  );
};

export default ShareButton;
