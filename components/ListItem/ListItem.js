import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function ListItem(props) {
  return (
    <View style={{alignItems: 'flex-start'}}>
      <TouchableOpacity>
        <View style={styles.listItem}>
          {Object.values(props.item).map((value) => {
            return (<Text>{value} </Text>);
          })}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    padding: 10,
  },
});