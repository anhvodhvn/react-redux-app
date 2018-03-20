import * as CONSTANSTS from '../lib/constants';
import courseApi from '../services/mockCourse';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createCourseSuccess(course) {
  return { type: CONSTANSTS.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: CONSTANSTS.EDIT_COURSE_SUCCESS, course };
}

export function loadCourseSuccess(courses){
  return { type: CONSTANSTS.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    })
    .catch(error => {
      throw error;
    });
  };
}

export function saveCourse(course){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(saveCourse => {
      if(saveCourse.id)
        dispatch(updateCourseSuccess(saveCourse));
      else
        dispatch(createCourseSuccess(saveCourse));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw error;
    });
  };
}
