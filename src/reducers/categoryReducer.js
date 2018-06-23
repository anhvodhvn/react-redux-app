import { LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_ERROR } from '../lib/constants';
import initialState from './initialState';

export default function(state = initialState.categories, action){
    switch (action.type) {
      case LOAD_CATEGORIES_SUCCESS:
        return [
          ...state, 
          Object.assign({}, action.categories)
        ];
      case LOAD_CATEGORIES_ERROR:
        return [
            ...state,
            Object.assign({}, [])
        ];
      default:
        return state;
    }
}