import * as CONSTANTS from '../lib/constants';
import initialState from './initialState';

export default function(state = initialState.products, action){
  switch (action.type) {
    case CONSTANTS.CREATE_PRODUCT_SUCCESS:
      return [
        ...state, 
        Object.assign({}, action.product)
      ];
    case CONSTANTS.EDIT_PRODUCT_SUCCESS: 
      return [
        ...state.filter(product => product.id !== action.product.id), 
        Object.assign({}, action.product)
      ];
    case CONSTANTS.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
