import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DropdownMenu(props) {

  const [selectedItem, setSelectedItem] = useState();

  return (
    <View>
      <Picker
        style={styles.pickerContainer}
        selectedValue={selectedItem}
        onValueChange={(value) => {setSelectedItem(value); props.onValueChange(value);}}>
        <Picker.Item
          style={styles.pikerItem}
          label="Choose search key.."
          value=""
        />
        <Picker.Item
          style={styles.pikerItem}
          label="Patient Name"
          value="name"
        />
        <Picker.Item
          style={styles.pikerItem}
          label="Given Name"
          value="given"
        />
        <Picker.Item
          style={styles.pikerItem}
          label="Family Name"
          value="family"
        />
        <Picker.Item
          style={styles.pikerItem}
          label="National ID"
          value="nationalid"
        />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: '#FE8938',
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 16,
    padding: 10,
  },
  pikerItem: {
    color: '#913030',
  },
});