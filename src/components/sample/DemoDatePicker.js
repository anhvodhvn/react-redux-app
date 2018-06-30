import React, { PropTypes } from 'react';
import { DateTimePicker } from 'react-widgets';

const FormDatePicker = ({ input: { onChange, value }, showTime, classWrapper, meta: {error, touched}, disabled }) => {
    return (
        <div className={classWrapper}>
            <DateTimePicker 
                onChange={onChange} 
                format={'DD-MM-YYYY'}
                editFormat={'DD-MM-YYYY'}
                time={showTime}
                value={!value? null : new Date(value)}
                inputProps={{ readOnly: true }}  // TO DO: check version
                disabled={disabled}
            />
            {error && touched && (<div className="text-danger">{error}</div>)}
        </div>
    );
};

FormDatePicker.propTypes = {
    input: PropTypes.object,
    showTime: PropTypes.bool,
    classWrapper: PropTypes.string,
    meta: PropTypes.object,
};

export default FormDatePicker;
