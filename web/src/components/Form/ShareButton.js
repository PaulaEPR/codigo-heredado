const ShareButton = (props) => {
  return (
    <>
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
      <div className="form__share--created" id="share-card">
        <h4>La tarjeta ha sido creada:</h4>
        <a href={props.dataAPI.cardURL} className="card-link" target="_blank">
          {props.dataAPI.cardURL}
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=Mi%20tarjeta%20de%20contacto%20creada%20por%20Las%20Picateclas%20&url=${props.dataAPI.cardURL}&hashtags=programación,js,adalab`}
          className="twitter"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
          Compartir en twitter
        </a>
      </div>
    </>
  );
};

export default ShareButton;
