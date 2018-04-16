import React, {PropTypes} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const DemoReactSelect = ({items, selectedItem, changeSelectItem}) => {  
    return (
        <Select name="form-field-name"
                value={selectedItem}
                onChange={changeSelectItem}
                options={items}
        />
    );
}

DemoReactSelect.propTypes = {
    items: PropTypes.array,
    selectedItem: PropTypes.string,
    changeSelectItem: PropTypes.func
}

export default DemoReactSelect;