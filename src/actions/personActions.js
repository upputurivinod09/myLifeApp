import * as types from './actionTypes';
import PersonApi from "../api/mockPersonApi";
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPersonsSuccess(persons) {
  return {
    type: types.LOAD_PERSONS_SUCCESS, persons
  };
}

export function savePersonSuccess(persons) {
  return {
    type: types.SAVE_PERSON_SUCCESS, persons
  };
}

export function updatePersonSuccess(persons) {
  return {
    type: types.UPDATE_PERSON_SUCCESS, persons
  };
}

export function loadPersons() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.getAllPersons().then(persons => {
      dispatch(loadPersonsSuccess(persons));
    }).catch(error => {
      throw (error);
    });
  };
}

export function savePerson(person) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.savePerson(person).then(persons => {
      person.id ? dispatch(updatePersonSuccess(persons)) : dispatch(savePersonSuccess(persons));
    }).catch(error => {
      throw (error);
    });
  };
}

export function loadPersonByFirstNameSuccess(person) {
  return {
    type: types.LOAD_PERSON_BY_FIRST_NAME_SUCCESS, person
  };
}

export function loadPersonByFirstName(personFirstName) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.loadPersonByFirstName(personFirstName).then(person => {
      dispatch(loadPersonByFirstNameSuccess(person));
    }).catch(error => {
      throw (error);
    });
  };
}
