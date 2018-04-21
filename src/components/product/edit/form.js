import React, { PropTypes } from 'react';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';

const Form = ({ product, authors, onSave, onCancel, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Product</h1>
            <TextInput
                name="title"
                label="Title"
                value={product.title}
                onChange={onChange}
                error={errors.title}/>

            <SelectInput
                name="authorId"
                label="Author"
                value={product.authorId}
                defaultOption="Select Author"
                options={authors}
                onChange={onChange} 
                error={errors.authorId}/>

            <TextInput
                name="category"
                label="Category"
                value={product.category}
                onChange={onChange}
                error={errors.category}/>

            <TextInput
                name="length"
                label="Length"
                value={product.length}
                onChange={onChange}
                error={errors.length}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>

            <input
                type="button"
                disabled={saving}
                value={'Cancel'}
                className="btn btn-danger"
                onClick={onCancel}/>
        </form>
    );
};

Form.propTypes = {
    product: PropTypes.object,
    authors: PropTypes.array,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default Form;