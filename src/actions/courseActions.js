import * as CONSTANSTS from '../lib/constants';
import courseApi from '../../server/api/mockCourse';

export function createCourse(course) {
  //debugger;
  return { type: CONSTANSTS.CREATE_COURSE, course };
}

export function updateCourse(course) {
  return { type: CONSTANSTS.EDIT_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: CONSTANSTS.LOAD_COURSE_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw error;
    });
  };
}