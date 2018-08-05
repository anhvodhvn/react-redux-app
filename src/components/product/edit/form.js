import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import InputText from '../../common/InputText';
import InputSelect from '../../common/InputSelect';
import InputDatePicker from '../../common/InputDatePicker';
import validate from './validate';

const FormProductEdit = ({ authors, category, handleSubmit, handleCancel, saving, errors}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Manage Product</h1>
            <Field name='title' component={InputText} label='Title' placeholder='Title' />

            <Field name='author' component={InputSelect} options={authors} label='Author' placeholder='Select Author' />

            <Field name='category' component={InputSelect} options={category} label='Category' placeholder='Select Category' />

            <Field name='length' component={InputText} label='Length' placeholder='Length' />

            <Field name='published' component={InputDatePicker} label='Published' placeholder='Published Date' />

            <button type='submit' disabled={saving} className='btn btn-primary'>Save</button>
            <button type='button' disabled={saving} className='btn btn-danger' onClick={handleCancel}>Cancel</button>
        </form>
    );
};

FormProductEdit.propTypes = {
    authors: PropTypes.array,
    category: PropTypes.array,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default reduxForm({
    form: 'FormProductEdit',
    validate
})(FormProductEdit) 