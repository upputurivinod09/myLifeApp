import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PersonReducer(state = initialState.persons, action) {
  switch(action.type) {
    case types.LOAD_PERSONS_SUCCESS:
      return action.persons;

    case types.SAVE_PERSON_SUCCESS:
      return action.persons;

    case types.UPDATE_PERSON_SUCCESS:
      return action.persons;

    default:
      return state;
  }
}
