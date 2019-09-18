import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "../../components/Home";
import { searchUsers } from "../../actions";


export class HomeContainer extends Component {
  render() {
    const { user, searchUsers } = this.props

    return (
      <Home navigation={this.props.navigation} user={user} searchFn={searchUsers} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  searchUsers: (...args) => dispatch(searchUsers(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);