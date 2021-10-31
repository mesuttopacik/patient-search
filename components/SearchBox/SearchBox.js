import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function SearchBox(props) {
  return (
    <View>
      <TextInput
        keyboardAppearance="light"
        style={styles.searchInput}
        placeholder={'Type to search'}
        onChangeText={props.onValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    padding: 10,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});