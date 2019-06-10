import React from 'react';
import PropTypes from 'prop-types';
import withCounter from './withCounter';

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

export default withCounter(ClickCounter);
