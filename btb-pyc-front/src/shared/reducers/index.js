import { combineReducers } from 'redux';
// import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import {userReducer as user} from './entities/user.reducer.js'
import questionEntity from './entities/questionEntity.reducer.js';
import category from './entities/category.reducer.js';
import exam from './entities/exam.reducer.js';
import examResult from './entities/examResult.reuducer.js';
import profileData from './entities/Myprofile.reducer.js'

const rootReducer = combineReducers({
    user,
    questionEntity,
    category,
    exam,
    examResult,
    profileData
});

export default rootReducer;
