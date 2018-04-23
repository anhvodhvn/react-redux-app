import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Row = ({product}) => {
  return (
    <tr>
      <td><a href={product.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/product/' + product.id}>{product.title}</Link></td>
      <td>{product.authorId}</td>
      <td>{product.category}</td>
      <td>{product.length}</td>
    </tr>
  );
};

Row.propTypes = {
    product: PropTypes.object
};

export default Row;