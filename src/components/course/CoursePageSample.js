import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';


/* container components */
class CoursePageSample extends React.Component {
    constructor(props, context){
      super(props, context);

      this.state = {
        course: { title: '' }
      };

      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }

    onChangeTitle(event){
      //console.log(event);
      let course = this.state.course;
      course.title = event.target.value;
      this.setState({course: course});
    }

    onSaveClick(){
      //console.log('onSaveClick ...', this.state.course);
      this.props.actions.createCourse(this.state.course);
    }

    courseRows(course, index){
      return <div key={index}>{course.title}</div>;
    }

    render() {
        //debugger;
        return (
            <div>
                <h1>Course Page</h1>
                {this.props.courses.map(this.courseRows)}
                <h2>Add Course </h2>
                <input name="Title" type="text" onChange={this.onChangeTitle} value={this.state.course.title} />
                <input name="Save" type="button" onClick={this.onSaveClick} value="Save"/>
            </div>
        );
    }
}


/* provider proptypes validation */
CoursePageSample.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


/* redux connect related functions */
function mapStateToProps(state, ownProps){
  //debugger;
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

//const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectStateAndProps(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePageSample);
