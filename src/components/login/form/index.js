import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from './validate';
import asyncValidate from './asyncValidate';

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } } ) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} className="sample-login-form">
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="password" type="password" component={renderField} label="Password" />
            <div>
                <button type="submit" disabled={submitting}>Sign Up</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    );
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'LoginForm',
    validate,
    asyncValidate
    // asyncBlurFields: ['username']
})(LoginForm);
