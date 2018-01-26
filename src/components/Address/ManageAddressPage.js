import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as addressActions from '../../actions/addressActions';
import {bindActionCreators} from 'redux';
import AddressForm from "./AddressForm";
import {browserHistory} from "react-router";
import toastr from "toastr";

class ManageAddressPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      address: Object.assign({}, props.address),
      errors: {}
    };

    this.saving = false;
    this.onSave = this.onSave.bind(this);
    this.updateAddressState = this.updateAddressState.bind(this);
    this.redirectToAddressesPage = this.redirectToAddressesPage.bind(this);
  }

  updateAddressState(event){
    const field = event.target.name;
    const value = event.target.value;
    let person = Object.assign({}, this.state.address);
    person[field] = value;
    return this.setState({address: address});
  }

  redirectToAddressesPage() {
    this.saving = false;
    toastr.success('Address Saved.');
    browserHistory.push("/addresses");
  }

  onSave(event){
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveAddress(this.state.address)
      .then(() => this.redirectToAddressesPage())
      .catch(error => {
        toastr.error(error);
        this.saving = false;
      });
  }

  render() {
    return (
      <AddressForm
        onChange={this.updateAddressState}
        onSave={this.onSave}
        address={this.state.address}
        errors={this.state.errors}
        saving={this.saving}
      />
    );
  }
}

ManageAddressPage.propTypes = {
  address: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  let address = {id: '', AppartmentName: '', Street: '', AppartmentNo: '', City: '', State: '', ZipCode: '', fromDate: '', toDate: '', currentAddress: false};
  return {
    address: address
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAddressPage);

