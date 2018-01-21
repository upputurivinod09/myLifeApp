import {combineReducers} from 'redux';
import persons from './PersonsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ persons, ajaxCallsInProgress });

export default rootReducer;
