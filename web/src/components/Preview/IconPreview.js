const Icon = (props) => {
  return (
    <>
      <div
        className={`card-icons js-iconBorder color${props.number}-icon-border`}
      >
        <a
          className={props.className}
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          <i className={`${props.icon} js-icon color${props.number}-icon`}></i>
        </a>
      </div>
    </>
  );
};

export default Icon;
