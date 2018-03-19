import * as CONSTANSTS from '../lib/constants';
import initialState from './initialState';

export default function(state = initialState.courses, action){
  switch (action.type) {
    case CONSTANSTS.CREATE_COURSE_SUCCESS:
      return [
        ...state, 
        Object.assign({}, action.course)
      ];
    case CONSTANSTS.EDIT_COURSE_SUCCESS: 
      return [
        ...state.filter(course => course.id !== action.course.id), 
        Object.assign({}, action.course)
      ];
    case CONSTANSTS.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
