import * as types from './actionTypes';
import AddressApi from "../api/mockAddressApi";
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAddressSuccess(addresses) {
  return {
    type: types.LOAD_ADDRESS_SUCCESS, addresses
  };
}

export function loadAddress() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AddressApi.getAllAddresses().then(addresses => {
      dispatch(loadAddressSuccess(addresses));
    }).catch(error => {
      throw (error);
    });
  };
}
