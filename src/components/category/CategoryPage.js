import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class CategoryPage extends React.Component {
    constructor(props, context){
      super(props, context);

      this.state = {
        Categories: []
      }
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
ProductPage.propTypes = {
  Categories: PropTypes.array,
  actions: PropTypes.object
};


/* redux connect related functions */
function mapStateToProps(state, ownProps){
  return {
    Categories: state.Categories
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(null, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);