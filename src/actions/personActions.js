import * as types from './actionTypes';
import PersonApi from "../api/personApi";
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPersonsSuccess(persons) {
  return {
    type: types.LOAD_PERSONS_SUCCESS, persons
  };
}

export function savePersonSuccess(savedPersonList) {
  return {
    type: types.SAVE_PERSON_SUCCESS, savedPersonList
  };
}

export function updatePersonSuccess(updatedPersonList) {
  return {
    type: types.UPDATE_PERSON_SUCCESS, updatedPersonList
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
    return PersonApi.savePerson(person).then(savedPersonList => {
      dispatch(savePersonSuccess(savedPersonList));
    }).catch(error => {
      throw (error);
    });
  };
}

export function updatePerson(person) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PersonApi.updatePerson(person).then(updatedPersonList => {
      dispatch(updatePersonSuccess(updatedPersonList));
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
