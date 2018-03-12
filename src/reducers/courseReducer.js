import * as CONSTANSTS from '../lib/constants';

export default function(state = [], action){
  switch (action.type) {
    case CONSTANSTS.CREATE_COURSE:
      //debugger;
      return [...state, Object.assign({}, action.course)];
    case CONSTANSTS.EDIT_COURSE:
      return true;
    default:
      return state;
  }
}
