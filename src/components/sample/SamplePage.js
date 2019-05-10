import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import DemoProgressBar from './DemoProgressBar';
import DemoDropdownMenu from './DemoDropdownMenu';
import DemoUploadFile from './DemoUploadFile';
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
          ],
          fileUpload: {
            success: false,
            url: '',
            error: false,
            errorMessage: ''
          }
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSelectedItem = this.handleSelectedItem.bind(this);
      this.onChangeFile = this.onChangeFile.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(selectedOption){
        this.setState({ selectedOption });
    }

    handleSelectedItem(selectedItem){
        this.setState({ selectedItem });
    }
    
    onChangeFile() {
        this.setState({ 
            fileUpload: { 
                success: false,
                url: '',
                error: false,
                errorMessage: ''
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        let selectedFile = document.getElementById('inputFile').files[0];
        let fileName = selectedFile.name;
        let fileType = selectedFile.type;
        
        axios.post("http://localhost:3001/sign_s3",{
            fileName : fileName,
            fileType : fileType
        })
        .then(response => {
            let returnData = response.data.data.returnData;
            let signedRequest = returnData.signedRequest;
            let url = returnData.url;
            this.setState({ 
                fileUpload: { 
                    success: false,
                    url: '',
                    error: false,
                    errorMessage: ''
                }
            });
            
            //console.log("Recieved a signed request " + signedRequest);
            let options = {
                headers: {
                  'Content-Type': fileType
                }
            };
            axios.put(signedRequest, selectedFile, options)
            .then(result => {
                //console.log("Response from s3:", result);
                this.setState({
                    fileUpload: {
                        success: true
                    }
                });
            })
            .catch(error => {
                alert("ERROR " + JSON.stringify(error));
            });
        })
        .catch(error => {
            alert("ERROR " + JSON.stringify(error));
        });
    }
    
    render() {
        const { selectedOption, selectedItem } = this.state;

        return (
            <div>
                <h1>Sample Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h3>Demo ProgressBar</h3>
                        <DemoProgressBar value={this.state.value}/>
                    </div>

                    <div className="form-group">
                        <h3>Demo React Select</h3>
                        <Select name="form-field-name"
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={list}
                        />
                    </div>

                    <div className="form-group">
                        <h3>Demo Custom React Select</h3>
                        <DemoReactSelect name="demoreactselect"
                                        items={list}
                                        selectedItem={selectedItem}
                                        changeSelectItem={this.handleSelectedItem}
                        />
                    </div>

                    <div className="form-group">
                        <h3>Demo Dropdown Multi Level</h3>
                        <NavMultiLevel />
                    </div>

                    <div className="form-group">
                        <h3>Demo Upload File</h3>
                        <DemoUploadFile onChangeFile={this.onChangeFile}/>
                    </div>

                    <div className="form-group">
                        <h3>Submit Form Values</h3>
                        <input type="submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SamplePage;
