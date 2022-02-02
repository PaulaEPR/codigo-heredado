const Icon = (props) => {
  return (
    <>
      <div className="card-icons js-iconBorder">
        <a
          className={props.className}
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          <i className={`${props.icon} js-icon`}></i>
        </a>
      </div>
    </>
  );
};

export default Icon;
