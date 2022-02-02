const TitlePreview = (props) => {
  return (
    <div className="preview__card--name">
      <div
        className={`line-palette js__line-palette background-color${props.number}`}
      ></div>
      <h3 className={`preview__card--name name color${props.number}-dark`}>
        {props.name || 'Vilma picatecla'}
      </h3>
      <h4 className={`preview__card--name profession color${props.number}`}>
        {props.job || 'Front end'}
      </h4>
    </div>
  );
};

export default TitlePreview;
