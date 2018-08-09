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

export function updateAddressSuccess(updatedAddress) {
  return {
    type: types.UPDATE_ADDRESS_SUCCESS, updatedAddress
  };
}

export function saveAddressSuccess(savedAddress) {
  return {
    type: types.SAVE_ADDRESS_SUCCESS, savedAddress
  };
}

export function saveAddress() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AddressApi.saveAddress().then(address => {
      address.id ? dispatch(updateAddressSuccess()) : dispatch(saveAddressSuccess());
    } ).catch(error => {
      throw (error);
    });
  };
}
