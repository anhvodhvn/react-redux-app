import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DemoProgressBar from './DemoProgressBar';
import DemoDropdownMenu from './DemoDropdownMenu';
import NavMultiLevel from '../common/NavMultiLevel';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
const list = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' }
];
import DemoReactSelect from './DemoReactSelect';

/* container components */
class SamplePage extends React.Component {
    constructor(props, context){
      super(props, context);

      this.state = {
          selectedOption: '',
          selectedItem: '',
          value: 85,
          items: [
              { id: 1, name: 'First Action' },
              { id: 2, name: 'Second Action' },
              { id: 3, name: 'Third Action' },
              { id: 4, name: 'Four Action' }
          ]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSelectedItem = this.handleSelectedItem.bind(this);
    }

    handleChange(selectedOption){
        this.setState({ selectedOption });
        //console.log(`Selected: ${selectedOption.label}`);
        //console.log(selectedOption);
    }

    handleSelectedItem(selectedItem){
        this.setState({ selectedItem });
        //console.log(`selectedItem: ${selectedItem.label}`);
        //console.log(selectedItem);
    }
    
    render() {
        const { selectedOption, selectedItem } = this.state;

        return (
            <div>
                <h1>Sample Page</h1>
                <div>
                    <h3>Demo ProgressBar</h3>
                    <DemoProgressBar value={this.state.value}/>
                </div>

                <div>
                    <h3>Demo React Select</h3>
                    <Select name="form-field-name"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={list}
                    />
                </div>

                <div>
                    <h3>Demo Custom React Select</h3>
                    <DemoReactSelect name="demoreactselect"
                                     items={list}
                                     selectedItem={selectedItem}
                                     changeSelectItem={this.handleSelectedItem}
                    />
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
