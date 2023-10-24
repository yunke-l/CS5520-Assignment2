import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';

function AddAnExpenseScreen() {
  const [item, setItem] = useState(null);
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSave = async () => {
    // Validation
    if (!item || unitPrice <= 0 || quantity <= 0 || isNaN(unitPrice) || isNaN(quantity)) {
      Alert.alert('Invalid data', 'Please enter valid data.');
      return;
    }

    // Saving to Firestore
    try {
      const newDocRef = await firestore().collection('expenses').add({
        item,
        unitPrice: parseFloat(unitPrice),
        quantity: parseInt(quantity),
      });
      Alert.alert('Success', `Entry added with ID: ${newDocRef.id}`);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while saving the entry.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <DropDownPicker
        items={[
          { label: 'Item 1', value: 'item1' },
          { label: 'Item 2', value: 'item2' },
          // add more items as needed
        ]}
        defaultValue={item}
        onChangeItem={selectedItem => setItem(selectedItem.value)}
      />
      
      <TextInput
        placeholder="Unit Price"
        keyboardType="numeric"
        value={unitPrice}
        onChangeText={setUnitPrice}
      />
      
      <TextInput
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

export default AddAnExpenseScreen;
