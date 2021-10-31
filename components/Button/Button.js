import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function Button(props) {
  return (
    <View>
      <TouchableOpacity
        style={props.style ?? styles.searchButton}
        onPress={props.onPress}>
        <Text style={styles.btnText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    backgroundColor: '#FE8938',
    fontWeight: 'bold',
    color: 'red',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});