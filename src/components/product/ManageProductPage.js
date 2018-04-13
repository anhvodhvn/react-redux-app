import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

import * as productActions from '../../actions/productActions';
import ProductForm from './ProductForm';

class ManageProductPage extends React.Component {
    constructor (props, context){
        super(props, context);

        this.state = {
            product: Object.assign({}, this.props.product),
            errors: {},
            saving: false
        };
    }

    /* this function life cycle will be called anytime when props have changed */
    componentWillReceiveProps(nextProps){
        if(this.props.product.id != nextProps.product.id){
            // need to populate form when existing product is loaded directly
            this.setState({product: Object.assign({}, nextProps.product)});
        }
    }

    saveProduct() {

    }

    updateProductState() {

    }

    render() {
        return (
            <ProductForm
                product={this.state.product}
                authors={this.props.authors}
                onChange={this.updateProductState}
                onSave={this.saveProduct}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

function getProductById(products, id){
    let product = products.filter(product => product.id == id);
    if(product) return product[0];
    else return null;
}

ManageProductPage.propTypes = {
    product: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.params.id;
    let product = {};
    if(productId && state.products.length>0){
        product = getProductById(state.products, productId);
    }

    return {
        product: product,
        authors: state.authors
    };
}

const mapDispatchToProps = dispatch => {
    bindActionCreators(productActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);  
