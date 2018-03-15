import React, { PropTypes } from 'react';
import { connect, bindActionCreators } from 'redux';
import { actionCreators } from 'react-redux';

class ManageCoursePage extends React.Component {
    constructor (props, context){
        super(props, context);
    }

    render() {
        return (true);
    }
}

ManageCoursePage.PropTypes = {

}

function mapStateToProps(state, ownProps){
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(dispatch)
    };
};
