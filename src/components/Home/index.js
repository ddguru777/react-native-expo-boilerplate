import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Input, Text, Content } from "native-base";
import { List, ListItem, Thumbnail, Item } from 'native-base';
import { StatusBar, Platform } from "react-native";
import _ from "lodash";

import styles from "./styles";

export default class Home extends Component {
  state = {
    searchTerm: '',
  }

  handleSearchChange = (newValue) => {
    this.setState({ searchTerm: newValue });
  }

  handleSearchPress = () => {
    const {searchFn} = this.props;
    const {searchTerm} = this.state;
    if (!searchTerm) {
      return;
    }
    
    searchFn(searchTerm);
  }

  renderSearchBar() {
    const {searchTerm} = this.state;

    return (
      <Header 
        noShadow
        searchBar
        rounded
        style={{ 
          borderBottomWidth: 1,
          height: 70,
          paddingTop: 0,
          paddingBottom: 0, }}
      >
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" style={{ color: '#fff' }} onChangeText={this.handleSearchChange} value={searchTerm} />
        </Item>
        <Button transparent onPress={this.handleSearchPress}>
          <Text>Search</Text>
        </Button>
      </Header>
    )
  }
  renderContent() {
    const isLoading = _.get(this.props, 'user.isLoading', false);
    const userList = _.get(this.props, 'user.list', []);
    const isFailed = _.get(this.props, 'user.isFailed', false);
    const errorMsg = _.get(this.props, 'user.error');

    if (isFailed) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10}}>{errorMsg}</Text>
      )
    }

    if (isLoading) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10}}>Loading...</Text>
      )
    }

    if (!userList.length) {
      return (
        <Text style={{ alignSelf: "center", marginTop: 10}}>No users to show!</Text>
      )
    }

    return (
      <List dataArray={userList} renderRow={({ id, profile_image, username, name}) => 
        <ListItem thumbnail key={id}>
          <Left>
            <Thumbnail source={{ uri: profile_image.medium }} />
          </Left>
          <Body>
            <Text>{name}</Text>
            <Text note>{username}</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      } />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ 
            borderBottomWidth: 1,
            height: Platform.OS === 'ios' ? 70 : 70,
            paddingTop: Platform.OS === 'ios' ? 10 : 20,
            paddingBottom: Platform.OS === 'ios' ? 0 : 0, }}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
            <Title style={styles.textBody}>Home</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        {this.renderSearchBar()}
        <Content>  
          {this.renderContent()}
        </Content>
      </Container>
    );
  }
}
