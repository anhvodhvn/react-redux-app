import React from 'react';
import PropTypes from 'prop-types';

const Row = ({item}) => {
  return (
    <div>
      <span>{item.id + '-' + item.name}</span>
    </div>
  );
};

Row.propTypes = {
    item: PropTypes.object
};

export default Row;