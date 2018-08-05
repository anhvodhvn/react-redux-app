import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as productActions from '../../../actions/productActions';
import Table from './table';

/* container components */
class ProductPage extends React.Component {
    constructor(props, context){
      super(props, context);

      this.redirectToAddProductPage = this.redirectToAddProductPage.bind(this);
    }

    redirectToAddProductPage() {
        browserHistory.push('/product');
    }

    render() {
        const {products} = this.props;

        return (
            <div>
                <h1>Products</h1>
                <input  type="submit"
                        value="Add Product" 
                        className="btn btn-primary"
                        onClick={this.redirectToAddProductPage} />
                <Table products={products}/>
            </div>
        );
    }
}


/* provider proptypes validation */
ProductPage.propTypes = {
  products: PropTypes.array,
  actions: PropTypes.object
};

/* redux connect related functions */
function mapStateToProps(state, ownProps){
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
