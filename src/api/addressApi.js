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
    currentAddress: false
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

const generateId = (address) => {
  return address.AppartmentName.toLowerCase() + '-' + address.AppartmentNo;
};

class AddressApi {
  static getAllAddresses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], addresses));
      }, delay);
    });
  }

  static saveAddress(address) {
    address = Object.assign({}, address); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (address.id) {
          const existingPersonIndex = addresses.findIndex(a => a.id == address.id);
          addresses.splice(existingPersonIndex, 1, address);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          address.id = generateId(address);
          addresses.push(address);
        }

        resolve(address);
      }, delay);
    });
  }

}

export default AddressApi;
