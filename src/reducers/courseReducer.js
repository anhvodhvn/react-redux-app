import * as CONSTANSTS from '../lib/constants';
import initialState from './initialState';

export default function(state = initialState.courses, action){
  switch (action.type) {
    case CONSTANSTS.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    case CONSTANSTS.EDIT_COURSE:
      return true;
    case CONSTANSTS.LOAD_COURSES_SUCCESS:
      //debugger;
      return action.courses;
    default:
      return state;
  }
}
