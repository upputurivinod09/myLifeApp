import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function AddressReducer(state = initialState.addresses, action) {
  switch(action.type) {
    case types.LOAD_ADDRESS_SUCCESS:
      return action.addresses;

    default:
      return state;
  }
}
