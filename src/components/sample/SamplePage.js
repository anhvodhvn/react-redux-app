import React, {Component, PropTypes} from 'react';
import NavMultiLevel from '../common/NavMultiLevel';
import SampleForm from './SampleForm';

class SamplePage extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            error: '',
            object: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* life cycle */
    componentWillMount(){

    }

    componentDidMount(){

    }

    /* events */
    handleSubmit(data) {
        console.log('- handleSubmit():', data);
    }
    
    render() {
        return (
            <div>
                <h1>Sample Page</h1>
                <div>
                    <h3>Demo Dropdown Multi Level</h3>
                    <NavMultiLevel />
                </div>

                <div>
                    <h3>Demo Sample Redux Form</h3>
                    <SampleForm handleSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

SamplePage.propTypes = {
}

export default SamplePage;
