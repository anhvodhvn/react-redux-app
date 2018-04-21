import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as productActions from '../../../actions/productActions';
import Form from './form';

class EditProduct extends React.Component {
    constructor (props, context){
        super(props, context);

        this.state = {
            product: Object.assign({}, this.props.product),
            errors: {},
            saving: false
        };

        this.updateProductState = this.updateProductState.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.cancelProduct = this.cancelProduct.bind(this);
    }

    /* this function life cycle will be called anytime when props have changed */
    componentWillReceiveProps(nextProps){
        if(this.props.product.id != nextProps.product.id){
            // need to populate form when existing product is loaded directly
            this.setState({product: Object.assign({}, nextProps.product)});
        }
    }

    saveProduct(event) {
        event.preventDefault();
        console.log('saveProduct ...');
    }

    cancelProduct(event){
        event.preventDefault();
        console.log('cancelProduct ...');
    }

    updateProductState(event) {
        let field = event.target.name;
        let product = this.state.product;
        product[field] = event.target.value;
        return this.setState({product: product});
    }

    render() {
        return (
            <Form
                authors={this.props.authors}
                product={this.state.product}
                onChange={this.updateProductState}
                onSave={this.saveProduct}
                onCancel={this.cancelProduct}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

EditProduct.propTypes = {
    product: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getProductById(products, id){
    let product = products.filter(product => product.id == id);
    if(product) return product[0];
    else return null;
}

const mapStateToProps = (state, ownProps) => {
    let product = { id:'', watchHref: '', title: '', authorId: '', length: '', category: ''};
    let productId = ownProps.params.id;
    if(productId && state.products.length>0){
        product = getProductById(state.products, productId);
    }

    let formatDisplayNameAuthor = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        product: product,
        authors: formatDisplayNameAuthor
    };
}

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators(productActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);  
