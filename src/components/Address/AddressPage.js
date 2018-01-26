import React,{PropTypes} from 'react';
import { Link, IndexLink , browserHistory } from 'react-router';
import * as addressActions from '../../actions/personActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddressList from './AddressList';

class AddressPage extends React.Component {

  redirectToAddAddressPage() {
    browserHistory.push("/addAddress");
  }

  render() {
    return (
      <div>
        <h1>Address Page</h1>
        <input type="submit" value="Add Address" className="btn btn-primary" onClick={this.redirectToAddAddressPage}/>
        <AddressList addresses={this.props.addresses}/>
      </div>
    );
  }
}

AddressPage.propTypes = {
  actions: PropTypes.object.isRequired,
  addresses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    addresses: state.addresses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addressActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressPage);
