import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import NavMultiLevel from '../common/NavMultiLevel';
import SampleForm from './SampleForm';

const reducer = combineReducers({
    form: reduxFormReducer // mounted under "form"
  })
  
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer)

class SamplePage extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            person: {
                firstName: 'Anh',
                lastName: 'Vo'
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    /* life cycle */
    componentWillMount(){
    }

    /* events */
    handleSubmit(event, object) {
        debugger;
        console.log(object);
    }

    render() {
        const {person} = this.state;
        const {handleSubmit} = this.props
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
