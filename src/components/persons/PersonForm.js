import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const PersonForm = ({person, onSave, onChange, errors, saving}) => {
    return (
      <form>
        <TextInput
          name="firstName"
          label="First Name"
          value={person.firstName}
          onChange={onChange}
          error={errors.firstName}/>

        <TextInput
          name="lastName"
          label="Last Name"
          value={person.lastName}
          onChange={onChange}
          error={errors.lastName}/>

        <input type="submit" disabled={saving} value={saving ? 'Saving..' : 'Save'} className="btn btn-default" onClick={onSave}/>
      </form>
    );
  };

PersonForm.propTypes = {
  person: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default PersonForm;
