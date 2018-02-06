import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import Checkbox from '../common/CheckBox';

const AddressForm = ({address, onSave, onChange, errors, saving}) => {
  return (
    <form>
      <TextInput
        name="AppartmentName"
        label="Appartment Name"
        value={address.AppartmentName}
        onChange={onChange}
        error={errors.AppartmentName}/>

      <TextInput
        name="Street"
        label="Street"
        value={address.Street}
        onChange={onChange}
        error={errors.Street}/>

      <TextInput
        name="AppartmentNo"
        label="Appartment No"
        value={address.AppartmentNo}
        onChange={onChange}
        error={errors.AppartmentNo}/>

      <TextInput
        name="City"
        label="City"
        value={address.City}
        onChange={onChange}
        error={errors.City}/>

      <TextInput
        name="State"
        label="State"
        value={address.State}
        onChange={onChange}
        error={errors.State}/>

      <TextInput
        name="ZipCode"
        label="ZipCode"
        value={address.ZipCode}
        onChange={onChange}
        error={errors.ZipCode}/>

      <DateInput
        name="fromDate"
        label="fromDate"
        value={address.fromDate}
        onChange={onChange}
        error={errors.fromDate}/>

      <DateInput
        name="toDate"
        label="toDate"
        value={address.toDate}
        onChange={onChange}
        error={errors.toDate}/>

      <Checkbox
        name="currentAddress"
        label="currentAddress"
        checked={address.currentAddress}
        onChange={onChange}
        error={errors.currentAddress}/>

      <input type="submit" disabled={saving} value={saving ? 'Saving..' : 'Save'} className="btn btn-default"
             onClick={onSave}/>
    </form>
  );
};

AddressForm.propTypes = {
  address: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.object
};

export default AddressForm;
