import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DemoProgressBar from './DemoProgressBar';
import DemoDropdownMenu from './DemoDropdownMenu';
import NavMultiLevel from '../common/NavMultiLevel';

/* container components */
class SamplePage extends React.Component {
    constructor(props, context){
      super(props, context);

      this.state = {
          value: 85,
          items: [
              { id: 1, name: 'First Action' },
              { id: 2, name: 'Second Action' },
              { id: 3, name: 'Third Action' },
              { id: 4, name: 'Four Action' }
          ]
      }

      this.handleSelectedValue = this.handleSelectedValue.bind(this);
    }

    handleSelectedValue(item) {
        console.log(item);
    }

    render() {
        return (
            <div>
                <h1>Sample Page</h1>
                <div>
                    <h3>Demo ProgressBar</h3>
                    <DemoProgressBar value={this.state.value}/>
                </div>
                <div>
                    <h3>Demo Dropdown Multi Level</h3>
                    <NavMultiLevel />
                </div>
            </div>
        );
    }
}

export default SamplePage;
