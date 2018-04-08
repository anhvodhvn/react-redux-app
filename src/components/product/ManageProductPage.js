import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../actions/productActions';
import toastr from 'toastr';

class ManageProductPage extends React.Component {
    constructor (props, context){
        super(props, context);
    }

    /* this function life cycle will be called anytime when props have changed */
    componentWillReceiveProps(nextProps){
        
    }

    render() {
        return (
            <div>Form Product Edit</div>
        );
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);  
