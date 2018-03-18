import * as CONSTANSTS from '../lib/constants';
import courseApi from '../services/mockCourse';

export function createCourse(course) {
  //debugger;
  return { type: CONSTANSTS.CREATE_COURSE, course };
}

export function updateCourse(course) {
  return { type: CONSTANSTS.EDIT_COURSE, course };
}

export function loadCourseSuccess(courses){
  return { type: CONSTANSTS.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    })
    .catch(error => {
      throw error;
    });
  };
}
