import { combineReducers } from 'redux';
// import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import {userReducer as user} from '../reducers/UserReducer.js'
import {examReducer as exam} from '../reducers/ExamReducer.js';
import {examReusltReducer as examResult} from '../reducers/ExamResultReducer.js';
import Myprofile from '../reducers/MyprofileReducer.js'

const rootReducer = combineReducers({
    user,
    exam,
    examResult,
    Myprofile
});
export default rootReducer;
