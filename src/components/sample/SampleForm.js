import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form';

const SampleForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={(e) => handleSubmit(e, this)}>
            <div>
                <label>First Name</label>
                <div className='field'>
                    <Field  name='firstName'
                            value={'ANH'}
                            component={
                                firstName => 
                                <div>
                                    <input {...firstName} type="text" placeholder="First Name" className='form-control'/>
                                    {/* {firstName.touched && firstName.error && <span>{firstName.error}</span>} */}
                                </div>
                            }
                    />
                </div>
            </div>

            <div>
                <label>Last Name</label>
                <div className='field'>
                    <Field  name='lastName'
                            component={
                                lastName => 
                                <div>
                                    <input type="text" placeholder="Last Name" className='form-control' />
                                    {lastName.touched && lastName.error && <span>{lastName.error}</span>}
                                </div>
                            } 
                    />
                </div>
            </div>

            <div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <button type='button' className='btn btn-danger'>Cancel</button>
            </div>
        </form>
    )
};

SampleForm.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'SampleForm'
})(SampleForm);
