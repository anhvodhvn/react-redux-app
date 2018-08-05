import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';

const FormProductEdit = ({ authors, category, handleSubmit, handleCancel, saving, errors}) => {
    return (
        <form onSubmit={handleSubmit}>
            <h1>Manage Product</h1>
            <Field name='title' component={TextInput} label='Title' placeholder='Title' />

            <Field name='author' component={SelectInput} options={authors} label='Author' placeholder='Select Author' />

            <Field name='category' component={SelectInput} options={category} label='Category' placeholder='Select Category' />

            <Field name='length' component={TextInput} label='Length' placeholder='Length' />

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
    form: 'FormProductEdit' // a unique identifier for this form
})(FormProductEdit) 