import * as CONSTANTS from '../lib/constants';
import initialState from './initialState';

export default function(state = initialState.courses, action){
  switch (action.type) {
    case CONSTANTS.CREATE_COURSE_SUCCESS:
      return [
        ...state, 
        Object.assign({}, action.course)
      ];
    case CONSTANTS.EDIT_COURSE_SUCCESS: 
      return [
        ...state.filter(course => course.id !== action.course.id), 
        Object.assign({}, action.course)
      ];
    case CONSTANTS.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
