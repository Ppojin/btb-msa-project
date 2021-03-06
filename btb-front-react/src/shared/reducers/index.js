import { combineReducers } from 'redux';
// import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import customer from './entities/customer.reducer'
import questionEntity from './entities/question-entity.reducer';
import category from './entities/category.reducer';
import question from './entities/question.reducer';
import examResult from './entities/exam-result.reducer';
import auth from './entities/auth.reducer'

const rootReducer = combineReducers({
  customer,
  questionEntity,
  category,
  question,
  examResult,
  auth,
});

export default rootReducer;
