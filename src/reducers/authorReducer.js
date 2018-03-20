import * as CONSTANTS from '../lib/constants';
import initialState from './initialState';

export default function(state = initialState.authors, action){
  switch (action.type) {
    case CONSTANTS.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
