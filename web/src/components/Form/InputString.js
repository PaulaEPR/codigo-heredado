function InputString(props) {
  const handleChangeInput = (ev) => {
    
    props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
  };
  return (
    <>
      <label className="label" htmlFor={props.name}>
      {props.label} { props.required ? "*" : null }
      </label>
      <input
/*         minLength="2"
        maxLength="20" */
        className="input js-input"
        placeholder={props.placeholder}
        id={props.name}
        type={props.type}
        name={props.name}
        pattern={props.pattern}
        required={props.required}
        onChange={handleChangeInput}
        value={props.value}
      />
    </>
  );
}

export default InputString;
