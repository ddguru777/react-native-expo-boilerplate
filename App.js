// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/stores/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./src/routers/App";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";
import { StyleProvider } from "native-base";

export default class Root extends Component {
  constructor(props) {
    super(props);
    const { persistor, store } = configureStore();
    this.persistor = persistor;
    this.store = store;
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={this.store}>
          <PersistGate persistor={this.persistor}>
            <App/>
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}

global.XMLHttpRequest = global.originalXMLHttpRequest ?
  global.originalXMLHttpRequest :
  global.XMLHttpRequest;
global.FormData = global.originalFormData ?
  global.originalFormData :
  global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) { // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false;
} else {
  global.Blob = global.originalBlob ?
    global.originalBlob :
    global.Blob;
  global.FileReader = global.originalFileReader ?
    global.originalFileReader :
    global.FileReader;
}

