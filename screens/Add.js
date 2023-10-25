import React, { useState } from 'react';
import { View, Alert, StyleSheet} from 'react-native';
import { writeToDB } from '../firebase/FirebaseHelper';
import { validateInputs } from '../components/Validation';
import InputForm from '../components/InputForm';
import SaveCancelButtons from '../components/SaveCancelButtons';

function AddAnExpenseScreen( {navigation} ) {
  const [item, setItem] = useState(null);
  const [unitPrice, setUnitPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // budget limit
  const budget = 500;
   

  // Save button handler
  const handleSave = async () => {
    // Validation
    if (!validateInputs(item, unitPrice, quantity)) {
      return;
    }

    // Calculate expense
    const expense = parseInt(unitPrice) * parseInt(quantity);

    // Creating an entry object
    const entry = {
      item,
      unitPrice: parseInt(unitPrice),
      quantity: parseInt(quantity),
      overBudget: expense > budget,
    };

    // Saving to Firestore using writeToDB
    try {
      await writeToDB(entry);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while saving the entry.');
    }

    navigation.goBack();
  };


  // Cancel button handler
    const handleCancel = () => {
        navigation.goBack();
    };
  

  return (
    <View>
      <View style={styles.inputFormContainer}>
      <InputForm
        item={item}
        unitPrice={unitPrice}
        quantity={quantity}
        setItem={setItem}
        setUnitPrice={setUnitPrice}
        setQuantity={setQuantity}
      />
      </View>


      <SaveCancelButtons
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputFormContainer: {
    marginBottom: '50%',
  },
});

export default AddAnExpenseScreen;

