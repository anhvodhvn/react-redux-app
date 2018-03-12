import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

/* container components */
class CoursePage extends React.Component {
    constructor(props, context){
      super(props, context);
    }

    courseRows(course, index){
      return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Course Page</h1>
                <CourseList courses={courses}/>
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
