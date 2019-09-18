import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { StatusBar, Platform } from "react-native";
import styles from "./styles";

export default class Photoslider extends Component {
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
              <Icon name="arrow-back" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Home</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <Text uppercase={false} style={styles.textLogin}>Photoslider</Text>
        </Content>
      </Container>
    );
  }
}
