import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ManagePersonReducer(state = initialState.person, action) {
  switch(action.type) {

    case types.LOAD_PERSON_BY_FIRST_NAME_SUCCESS:
      return action.person;

    default:
      return state;
  }
}
