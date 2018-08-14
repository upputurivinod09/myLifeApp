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
      person: Object.assign({}, props.person),
      errors: {}
    };

    this.saving = false;
    this.onSave = this.onSave.bind(this);
    this.updatePersonState = this.updatePersonState.bind(this);
    this.redirectToPeronsPage = this.redirectToPeronsPage.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //  if(this.props.person.firstName !== nextProps.person.firstName) {
  //    this.setState({person: Object.assign({}, nextProps.person)});
  //  }
  // }

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
    if(this.state.person.id == "") {
      this.props.actions.savePerson(this.state.person)
        .then(() => this.redirectToPeronsPage())
        .catch(error => {
          toastr.error(error);
          this.saving = false;
        });
    } else {
      this.props.actions.updatePerson(this.state.person)
        .then(() => this.redirectToPeronsPage())
        .catch(error => {
          toastr.error(error);
          this.saving = false;
        });
    }
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
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getPersonById(persons, personId) {
  const person = persons.filter(person => person.id === personId);
  if(person) return person[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const personId = ownProps.params.id;
  let person = {firstName: '', lastName: '', id: ''};
  if(personId && state.persons.length > 0){
    person = getPersonById(state.persons, personId);
  }

  return {
    person: person
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);
