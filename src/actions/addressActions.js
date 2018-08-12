import * as types from './actionTypes';
import AddressApi from "../api/addressApi";
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

export function updateAddressSuccess(address) {
  return {
    type: types.UPDATE_ADDRESS_SUCCESS, address
  };
}

export function saveAddressSuccess(address) {
  return {
    type: types.SAVE_ADDRESS_SUCCESS, address
  };
}

export function saveAddress(address) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AddressApi.saveAddress(address).then(address => {
      address.id ? dispatch(updateAddressSuccess(address)) : dispatch(saveAddressSuccess(address));
    }).catch(error => {
      throw error;
    });
  };
}
