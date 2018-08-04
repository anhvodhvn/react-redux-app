import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SampleFormPage extends Component {
    constructor(props, context){
      super(props, context);
    }
    
    render() {
        return (
            <div>
                <h1>Sample Form Array</h1>
                
            </div>
        );
    }
}

export default SampleFormPage;
