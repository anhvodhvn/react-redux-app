import React, { Component } from 'react';
import Row from './row';
import DataSource from '../datasource';

class Blog extends Component {
    constructor(props, context){
      super(props, context);

      this.handleChange = this.handleChange.bind(this);
      this.state = {
        blogPost: DataSource.getBlogPost(2)
      };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }
    
    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
          blogPost: DataSource.getBlogPost(2)
        });
    }

    render() {
        return (
            <div>
                <h1>Blogs</h1>
                <Row text={this.state.blogPost} />
            </div>
        );
    }
}

export default Blog;
