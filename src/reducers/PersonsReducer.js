import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PersonReducer(state = initialState.persons, action) {
  switch(action.type) {
    case types.LOAD_PERSONS_SUCCESS:
      return action.persons;

    case types.SAVE_PERSON_SUCCESS:
      return action.savedPersonList;

    case types.UPDATE_PERSON_SUCCESS:
      // return [...state.filter(person => person.id !== action.updatedPerson.id), Object.assign({}, action.updatedPerson)];
      return action.updatedPersonList;

    case types.DELETE_PERSON_SUCCESS:
      // return [...state.filter(person => person.id !== action.updatedPerson.id), Object.assign({}, action.updatedPerson)];
      return action.updatedPersonList;

    default:
      return state;
  }
}
