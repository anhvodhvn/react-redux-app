import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
  return (
    <tr>
      <td><a href={product.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + product.id}>{product.title}</Link></td>
      <td>{product.authorId}</td>
      <td>{product.category}</td>
      <td>{product.length}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductListRow;