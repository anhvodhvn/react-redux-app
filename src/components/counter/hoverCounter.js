import React from 'react';
import PropTypes from 'prop-types';
import withCounter from './withCounter';

const HoverCounter = ({ count, incrementCount }) => {
    return (
        <h2 onMouseOver={incrementCount}>
            Hovered: {count} times
        </h2>
    );
};

HoverCounter.propTypes = {
    count: PropTypes.number,
    incrementCount: PropTypes.func
};

export default withCounter(HoverCounter);
