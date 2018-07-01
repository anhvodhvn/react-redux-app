import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';

const SampleForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return 
    (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div className='field'>
                    <Field  name='firstName'
                            component='input'
                            type='text'
                            placeholder='First Name'
                            className='form-control'
                    />
                </div>
            </div>

            <div>
                <label>Last Name</label>
                <div className='field'>
                    <Field  name='lastName'
                            component='input'
                            type='text'
                            placeholder='Last Name'
                            className='form-control'
                    />
                </div>
            </div>

            <div>
                <label>Email</label>
                <div className='field'>
                    <Field name='email'
                            component='input'
                            type='email'
                            placeholder='Email'
                            className='form-control'
                    />
                </div>
            </div>

            <div>
                <label>Sex</label>
                <div className='field'>
                    <label>
                        <Field name='sex' component='input' type='radio' value='male' className='form-control'/>{' '}Male
                    </label>
                    <label>
                        <Field name='sex' component='input' type='radio' value='female' className='form-control'/>{' '}Female
                    </label>
                </div>
            </div>

            {/* <div>
                <label>Favorite Color</label>
                <div className='field'>
                    <Field name='favoriteColor' component='select' className='form-control'>
                        <option />
                        <option value='ff0000'>Red</option>
                        <option value='00ff00'>Green</option>
                        <option value='0000ff'>Blue</option>
                    </Field>
                </div>
            </div> */}

            <div>
                <label htmlFor='employed'>Employed</label>
                <div className='field'>
                    <Field  name='employed'
                            id='employed'
                            component='input'
                            type='checkbox'
                            className='form-control'
                    />
                </div>
            </div>

            <div>
                <label>Notes</label>
                <div className='field'>
                    <Field name='notes' component='textarea' className='form-control' />
                </div>
            </div>
            
            <div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <button type='button' className='btn btn-danger'>Cancel</button>
            </div>
        </form>
    )
}  

SampleForm.propTypes = {
    handleSubmit: PropTypes.func
};

export default reduxForm({
    form: 'Sample' 
})(SampleForm);
