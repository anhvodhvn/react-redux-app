import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class ManageCategoryPage extends React.Component {
    constructor(props, context){
      super(props, context);
    }

    render() {
        return (
            <div>
                CategoryPage
            </div>
        );
    }
}

export default ManageCategoryPage;