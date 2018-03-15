import * as CONSTANSTS from '../lib/constants';

export default function(state = [], action){
  // debbuger;
  switch (action.type) {
    case CONSTANSTS.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    case CONSTANSTS.EDIT_COURSE:
      return true;
    case CONSTANSTS.LOAD_COURSE_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
