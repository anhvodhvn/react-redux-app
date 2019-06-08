import React from 'react';
import PropTypes from 'prop-types';

const Row = ({text}) => {
  return (
    <div>
      <span>{text.id + '-' + text.name}</span>
    </div>
  );
};

Row.propTypes = {
  text: PropTypes.object
};

export default Row;