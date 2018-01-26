import {combineReducers} from 'redux';
import persons from './PersonsReducer';
import addresses from './AddressReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ persons, ajaxCallsInProgress, addresses });

export default rootReducer;
