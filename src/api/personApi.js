import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const persons = [
  {
    id: 'vinod-Upputuri',
    firstName: 'Vinod',
    lastName: 'Upputuri'
  },
  {
    id: 'anusha-gorantla',
    firstName: 'Anusha',
    lastName: 'Gorantla'
  },
  {
    id: 'sudeeksha-upputuri',
    firstName: 'Sudeeksha',
    lastName: 'Upputuri'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (person) => {
  return person.firstName.toLowerCase() + '-' + person.lastName.toLowerCase();
};

class PersonApi {
  static getAllPersons() {
    let url = '/person/getAllPersons';
    return fetch(url, {
      credentials: 'include'
    })
      .then(data => {
        return data.json();
      })
      .catch(error => {
        throw error;
      });
  }

  static savePerson(person) {
    let url = '/person/save';
    return fetch(url, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(person)
    })
      .then(data => {
        return data.json();
      })
      .catch(error => {
        throw error;
      });
  }

  static updatePerson(person) {
    let url = '/person/update';
    return fetch(url, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(person)
    })
      .then(data => {
        return data.json();
      })
      .catch(error => {
        throw error;
      });
  }

  static deletePerson(person) {
    let url = '/person/delete';
    return fetch(url, {
      method: 'delete',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(person)
    })
      .then(data => {
        return data.json();
      })
      .catch(error => {
        throw error;
      });
  }

  static loadPersonByFirstName(personFirstName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const person = persons.filter(person => personFirstName == person.firstName);
        resolve(Object.assign([], person[0]));
      }, delay);
    });
  }
}

export default PersonApi;
