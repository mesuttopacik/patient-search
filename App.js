import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Home from './screens/Home';
import store from "./config/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Home/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
