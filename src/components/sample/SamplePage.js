import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* container components */
class SamplePage extends React.Component {
    constructor(props, context){
      super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Sample Page</h1>
            </div>
        );
    }
}

export default connect(null, null)(SamplePage);
