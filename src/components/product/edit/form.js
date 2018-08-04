import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form'; 
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';

const FormProductEdit = ({ product, authors, onSave, onCancel, saving, errors}) => {
    return (
        <form>
            <h1>Manage Product</h1>
            <Field name='title' component={TextInput} label='Title' placeholder='Title' />
            <TextInput
                name="title"
                label="Title"
                value={product.title}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={product.authorId}
                defaultOption="Select Author"
                options={authors}
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={product.category}
                error={errors.category}/>

            <TextInput
                name="length"
                label="Length"
                value={product.length}
                
                error={errors.length}/>

            <button
                type="submit"
                disabled={saving}
                className="btn btn-primary"
                onClick={onSave}>Save</button>

            <button
                type="button"
                disabled={saving}
                className="btn btn-danger"
                onClick={onCancel}>Cancel</button>
        </form>
    );
};

FormProductEdit.propTypes = {
    product: PropTypes.object,
    authors: PropTypes.array,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default reduxForm({
    form: 'FormProductEdit' // a unique identifier for this form
})(FormProductEdit) 