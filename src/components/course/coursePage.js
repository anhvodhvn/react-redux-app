import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

/* container components */
class CoursePage extends React.Component {
    constructor(props, context){
      super(props, context);
    }

    courseRows(course, index){
      return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Course Page</h1>
                {this.props.courses.map(this.courseRows)}
            </div>
        );
    }
}


/* provider proptypes validation */
CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


/* redux connect related functions */
function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
