import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './form';

const getProductById = (products, id) => {
    let product = products.find(product => product.id == id);
    if(product) return product;
    else return null;
}

class ProductEdit extends React.Component {
    constructor (props, context){
        super(props, context);

        this.state = {
            errors: {},
            saving: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    /* this function life cycle will be called anytime when props have changed */
    // componentWillReceiveProps(nextProps){
    //     if(this.props.product.id != nextProps.product.id){
    //         // need to populate form when existing product is loaded directly
    //         this.setState({product: Object.assign({}, nextProps.product)});
    //     }
    // }

    handleSubmit(values) {
        console.log('values:', values);
    }

    handleCancel(){
        this.context.router.push('/products');
    }

    render() {
        return (
            <Form
                authors={this.props.authors}
                category={this.props.authors}
                onSubmit={this.handleSubmit}
                handleCancel={this.handleCancel}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ProductEdit.propTypes = {
    product: PropTypes.object,
    authors: PropTypes.array,
    actions: PropTypes.object
};

ProductEdit.contextTypes = {
    router: PropTypes.object
};

const mapStoreToProps = (state, ownProps) => {
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
    }, dispatch)
)

export default connect(mapStoreToProps, mapDispatchToProps)(ProductEdit);  
