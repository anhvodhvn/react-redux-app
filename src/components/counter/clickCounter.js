import React from 'react';
import PropTypes from 'prop-types';

const ClickCounter = ({ count, incrementCount }) => {
    return (
        <button onClick={incrementCount}>
            Clicked {count} times
        </button>
    );
};

ClickCounter.propTypes = {
    count: PropTypes.number,
    incrementCount: PropTypes.func
};

export default ClickCounter;
