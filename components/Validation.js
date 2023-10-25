import { Alert } from 'react-native';

// Validation of inputs
export const validateInputs = (item, unitPrice, quantity) => {
    // empty inputs
    if (!item || !unitPrice || !quantity) {
        Alert.alert('Please check your input values.');
        return false;
      }
  
      // invalid inputs
      if (isNaN(unitPrice) || unitPrice <= 0) {
        Alert.alert('Unit price must be a number greater than 0.');
        return false;
      }
      if (isNaN(quantity) || quantity <= 0) {
          Alert.alert('Please select a quantity from the picker.');
          return false;
      }
}