import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as productActions from '../../actions/productActions';
import ProductList from './ProductList';

/* container components */
class ProductPage extends React.Component {
    constructor(props, context){
      super(props, context);

      this.redirectToAddProductPage = this.redirectToAddProductPage.bind(this);
    }

    redirectToAddProductPage() {

    }

    render() {
        const {products} = this.props;
        
        return (
            <div>
                <h1>Products</h1>
                <input  type="submit"
                        value="Add Product" 
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage} />
                <ProductList products={products}/>
            </div>
        );
    }
}


/* provider proptypes validation */
ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
