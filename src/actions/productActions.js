import * as CONSTS from '../lib/constants';
import productApi from '../services/mockProduct';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createProductSuccess(product) {
  return { type: CONSTS.CREATE_PRODUCT_SUCCESS, product };
}

export function updateProductSuccess(product) {
  return { type: CONSTS.EDIT_PRODUCT_SUCCESS, product };
}

export function loadProductSuccess(products){
  return { type: CONSTS.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductSuccess(products));
    })
    .catch(error => {
      throw error;
    });
  };
}

export function saveProduct(product){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return productApi.saveProduct(product).then(saveProduct => {
      if(saveProduct.id)
        dispatch(updateProductSuccess(saveProduct));
      else
        dispatch(createProductSuccess(saveProduct));
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw error;
    });
  };
}
