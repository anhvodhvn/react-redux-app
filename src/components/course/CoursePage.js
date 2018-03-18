import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

/* container components */
class CoursePage extends React.Component {
    constructor(props, context){
      super(props, context);

      this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRows(course, index){
      return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
      browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input  type="submit"
                        value="Add Course" 
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage} />
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
