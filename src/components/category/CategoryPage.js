import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class CategoryPage extends React.Component {
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


/* provider proptypes validation */
CategoryPage.propTypes = {
  categories: PropTypes.array,
  actions: PropTypes.object
};

export default CategoryPage;