import React from 'react';
import PropTypes from 'prop-types';
import UpdatedComponent from './withCounter';

const ClickCounter = () => {
    const { count, incrementCount } = this.props; 
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

export default UpdatedComponent(ClickCounter);
