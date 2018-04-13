import React, {PropTypes} from 'react';
import { ProgressBar } from 'react-bootstrap';

const DemoProgressBar = ({value}) => {
    return (
        <div>
            <ProgressBar now={value} label={`${value}%`}/>
        </div>
    );
}

DemoProgressBar.propTypes = {
    value: PropTypes.number.isRequired
}

export default DemoProgressBar;