import React, {PropTypes} from 'react';
import PersonForm from "./PersonForm";
import {connect} from 'react-redux';
import * as personActions from '../../actions/personActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManagePersonPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      person: Object.assign({}, this.props.person),
      errors: {}
    };

    this.saving = false;
    this.onSave = this.onSave.bind(this);
    this.updatePersonState = this.updatePersonState.bind(this);
    this.redirectToPeronsPage = this.redirectToPeronsPage.bind(this);
  }

  componentWillMount() {
    const personfirstName = this.props.params.firstName;
    if(personfirstName != null) {
      this.loadPersonByFirstName(personfirstName);
    }
  }

  loadPersonByFirstName(personFirstName) {
    this.props.actions.loadPersonByFirstName(personFirstName);
  }

  updatePersonState(event){
    const field = event.target.name;
    const value = event.target.value;
    let person = Object.assign({}, this.state.person);
    person[field] = value;
    return this.setState({person: person});
  }

  redirectToPeronsPage() {
    this.saving = false;
    toastr.success('Person Saved.');
    browserHistory.push("/persons");
  }

  onSave(event){
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.savePerson(this.state.person)
      .then(() => this.redirectToPeronsPage())
      .catch(error => {
        toastr.error(error);
        this.saving = false;
      });
  }

  render() {
    return (
      <PersonForm
        onChange={this.updatePersonState}
        onSave={this.onSave}
        person={this.state.person}
        errors={this.state.errors}
        saving={this.saving}
      />
    );
  }
}

ManagePersonPage.propTypes = {
  person: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let person = {id: '', firstName: '', lastName: ''};

  return {
    person: state.person
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);
