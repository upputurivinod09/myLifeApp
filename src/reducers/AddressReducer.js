import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function AddressReducer(state = initialState.addresses, action) {
  switch(action.type) {
    case types.LOAD_ADDRESS_SUCCESS:
      return action.addresses;

    case types.SAVE_ADDRESS_SUCCESS:
      return [...state, Object.assign({}, action.savedAddress)];

    case types.UPDATE_ADDRESS_SUCCESS:
      return [...state.filter(address => {address.id != action.updatedAddress.id}), Object.assign({}, action.updatedAddress)];

    default:
      return state;
  }
}
