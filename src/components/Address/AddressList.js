import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const AddressList = ({addresses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>AppartmentName</th>
        <th>Street</th>
        <th>AppartmentNo</th>
        <th>City</th>
        <th>State</th>
        <th>ZipCode</th>
        <th>fromDate</th>
        <th>toDate</th>
        <th>currentAddress</th>
      </tr>
      </thead>
      <tbody>
      {addresses.map(address =>
        <tr key={address.id}>
          <td><Link to={'/addess/' + address.id}>{address.AppartmentName}</Link></td>
          <td>{address.Street}</td>
          <td>{address.AppartmentNo}</td>
          <td>{address.City}</td>
          <td>{address.State}</td>
          <td>{address.ZipCode}</td>
          <td>{address.fromDate}</td>
          <td>{address.toDate}</td>
          <td>{String(address.currentAddress)}</td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

AddressList.propTypes = {
  addresses: PropTypes.array.isRequired
};

export default AddressList;

