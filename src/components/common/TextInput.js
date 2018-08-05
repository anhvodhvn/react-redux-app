import React, {PropTypes} from 'react';

const TextInput = ({ input, name, label, placeholder, value, onChange, meta: {error, touched, dirty, pristine} }) => {
  return (
    <div className={`form-group ${(error && dirty) ? 'has-error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input  {...input}
                type="text"
                name={name}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
        {error && dirty && <div className="text-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;