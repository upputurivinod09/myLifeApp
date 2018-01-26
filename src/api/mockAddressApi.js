import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const addresses = [
  {
    id: 'AlanzaBrook-11308',
    AppartmentName: 'AlanzaBrook',
    Street: '3030 Dunvale Road',
    AppartmentNo: '11308',
    City: 'Houston',
    State: 'State',
    ZipCode: '77063',
    fromDate: '10/10/2017',
    toDate: '03/31/2018',
    currentAddress: true
  },
  {
    id: 'AlanzaBrook-11309',
    AppartmentName: 'AlanzaBrook',
    Street: '3030 Dunvale Road',
    AppartmentNo: '11308',
    City: 'Houston',
    State: 'State',
    ZipCode: '77063',
    fromDate: '10/10/2017',
    toDate: '03/31/2018',
    currentAddress: true
  }
];


class AddressApi {
  static getAllAddresses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], addresses));
      }, delay);
    });
  }
}

export default AddressApi;
