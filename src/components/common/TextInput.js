import React, {PropTypes} from 'react';

class TextInput extends React.Component {
  render() {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
                 name={this.props.name}
                 className="form-control"
                 placeholder={this.props.placeholder}
                 ref={this.props.name}
                 onChange={this.props.onChange}
                 value={this.props.value}/>
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
