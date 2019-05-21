import React, { PropTypes } from 'react';

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } } ) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

renderField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object
};

export default renderField;