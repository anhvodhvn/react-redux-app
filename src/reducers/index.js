import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import courses from './courseReducer';
import authors from './authorReducer';
import products from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  products,
  form: reduxFormReducer,
  ajaxCallsInProgress
});

export default rootReducer;
