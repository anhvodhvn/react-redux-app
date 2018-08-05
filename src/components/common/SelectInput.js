import React, {PropTypes} from 'react';

const SelectInput = ({ input, name, label, placeholder, value, defaultValue, options, onChange, meta: {error, touched} }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select {...input}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="form-control">
            <option value={value}>{defaultValue}</option>
            {
              options.map((option) => { return <option key={option.value} value={option.value}>{option.text}</option>; })
            }
        </select>
        {error && touched && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func
};

export default SelectInput;