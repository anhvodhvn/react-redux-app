import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';

const Table = ({products}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
        {
          products.map(product => <Row key={product.id} product={product}/>)
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
    products: PropTypes.array
};

export default Table;