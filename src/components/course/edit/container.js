import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as courseActions from '../../../actions/courseActions';
import Form from './form';

class EditCourse extends React.Component {
    constructor (props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    /* this function life cycle will be called anytime when props have changed */
    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.course.id){
            // need to populate form when existing course is loaded directly
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        let field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({saving: true});

        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('course save success.');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <Form 
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

EditCourse.propTypes = {
    course: PropTypes.object,
    authors: PropTypes.array,
    actions: PropTypes.object
};

EditCourse.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id){
    let course = courses.filter(course => course.id == id);
    if(course) return course[0];
    else return null;
}

function mapStateToProps(state, ownProps){
    let course = { id:'', watchHref: '', title: '', authorId: '', length: '', category: ''};
    let courseId = ownProps.params.id;
    if(courseId && state.courses.length>0){
        course = getCourseById(state.courses, courseId);
    }

    let formatDisplayNameAuthor = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    
    return {
        course: course,
        authors: formatDisplayNameAuthor
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);  
