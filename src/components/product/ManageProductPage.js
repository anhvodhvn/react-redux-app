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
        
    }

    saveProduct() {

    }

    updateProductState() {

    }

    render() {
        return (
            <ProductForm 
                allAuthors={this.props.authors}
                onChange={this.updateProductState}
                onSave={this.saveProduct}
                product={this.state.product}
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

function mapStateToProps(state, ownProps){
    return {
        product: state.product
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);  
