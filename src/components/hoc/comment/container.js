import React, { Component } from 'react';
import Row from './row';
import DataSource from '../datasource';

class CommentList extends Component {
    constructor(props, context){
      super(props, context);

      this.handleChange = this.handleChange.bind(this);
      this.state = {
        comments: DataSource.getComments()
      };
    }

    componentDidMount() {
        // Subscribe to changes
        DataSource.addChangeListener(this.handleChange);
    }
    
    componentWillUnmount() {
        // Clean up listener
        DataSource.removeChangeListener(this.handleChange);
    }
    
    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()
        });
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                {this.state.comments.map(item => <Row key={item.id} item={item}/>)}
            </div>
        );
    }
}

export default CommentList;
