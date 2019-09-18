import React, { Component } from "react";
import Home from "../../components/Home";

export default class HomeContainer extends Component {
  goPhotoslilder(){
    this.props.navigation.navigate("Photoslider");
  }

  render() {
    return (
      <Home 
        navigation={this.props.navigation}
        onPressPhotoslider={() => this.goPhotoslilder()}
      />
    );
  }
}

