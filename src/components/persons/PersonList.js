import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PersonList = ({persons, onDelete}) => {
  console.log('test', persons);

  componentWillReceiveProps(nextProps) {
   if(this.props.persons !== nextProps.persons) {
     return true;
   }else {
     return false;
   }
  }

  render()
  {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
        </tr>
        </thead>
        <tbody>
        {persons && persons.length > 0 && persons.map(person =>
          <tr key={person.id}>
            <td><Link to={'/person/' + person.id}>{person.firstName}</Link></td>
            <td>{person.lastName}</td>
            <td><input type="button" className="btn btn-primary" value="Remove" onClick={onDelete(person)}/></td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PersonList;

