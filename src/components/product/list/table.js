import React, {PropTypes} from 'react';
import Row from './row';
import Header from './header';
import Footer from './footer';

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
    products: PropTypes.array.isRequired
};

export default Table;