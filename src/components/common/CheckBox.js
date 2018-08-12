import React, {PropTypes} from 'react';

const Checkbox = ({name, label, onChange, placeholder, checked, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="checkbox"
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          checked={checked}/>
        <div className="input">{error}</div>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
    name:PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    checked: PropTypes.string,
    error: PropTypes.string
};

export default Checkbox;
