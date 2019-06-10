import React, { PropTypes } from 'react';
import { DateTimePicker } from 'react-widgets';

const InputDatePicker = ({ input: { onChange, value }, formatString, showTime, disabled, classWrapper, meta: {error, touched, dirty} }) => {
    let formatValue = formatString ? formatString.toString() : 'DD-MM-YYYY';
    return (
        <div className={`form-group ${(error && touched) ? 'has-error' : ''}`}>
            <DateTimePicker 
                format={formatValue}
                editFormat={formatValue}
                time={showTime}
                value={!value? null : new Date(value)}
                onChange={onChange}
                inputProps={{ readOnly: true }}  // TO DO: check version
                disabled={disabled} />
            {
                error && touched && (<div className="text-danger">{error}</div>) ||
                error && dirty && (<div className="text-danger">{error}</div>)
            }
        </div>
    );
};

InputDatePicker.propTypes = {
    input: PropTypes.object,
    formatString: PropTypes.string,
    showTime: PropTypes.bool,
    disabled: PropTypes.bool,
    classWrapper: PropTypes.string,
    meta: PropTypes.object
};

export default InputDatePicker;
