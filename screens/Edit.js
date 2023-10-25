import React, { useState, useLayoutEffect } from 'react';
import { View, Alert, Text, StyleSheet} from 'react-native';
import { editInDB, deleteFromDB } from '../firebase/FirebaseHelper';
import PressableButton from '../components/PressableButton';
import Checkbox from '../components/Checkbox';
import InputForm from '../components/InputForm';
import SaveCancelButtons from '../components/SaveCancelButtons';
import { FontAwesome } from '@expo/vector-icons';
import { validateInputs } from '../components/Validation';

// use AddAnExpenseScreen as a template for this screen
function EditScreen( {navigation, route} ) {
    const { currentEntry } = route.params;
    const [item, setItem] = useState(currentEntry.item);
    const [unitPrice, setUnitPrice] = useState(currentEntry.unitPrice.toString());
    const [quantity, setQuantity] = useState(currentEntry.quantity.toString());
    const [overBudget, setOverBudget] = useState(currentEntry.overBudget);
    const [isChecked, setIsChecked] = useState(false);
    const budgetLimit = 500;

    // Save button handler
    const handleSave = async () => {
        // Validation
        // empty inputs
        if (!validateInputs(item, unitPrice, quantity)) {
            return;
        }

        Alert.alert(
            'Important',
            'Are you sure you want to save these changes?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        const expense = parseInt(unitPrice) * parseInt(quantity);
                        let updatedOverBudget;

                        if (isChecked) {
                            updatedOverBudget = false;
                        }
                        else {
                            updatedOverBudget = expense > budgetLimit;
                        }

                        const entry = {
                            item,
                            unitPrice: parseInt(unitPrice),
                            quantity: parseInt(quantity),
                            overBudget: updatedOverBudget,
                        };

                        try {
                            editInDB(currentEntry.id, entry);
                        }
                        catch (error) {
                            Alert.alert('Error', 'An error occurred while saving the entry.');
                        }

                        navigation.goBack();
                },
            },
      ] 
        )
    };


    // Cancel button handler
    const handleCancel = () => {
        navigation.goBack();
    };

    // delete button handler
    const handleDelete = () => {
        try {
            deleteFromDB(currentEntry.id);
        }
        catch (error) {
            Alert.alert('Error', 'An error occurred while deleting the entry.');
        }
        navigation.goBack();
    }


    // delete button
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PressableButton
                    pressedFunction={handleDelete}
                    pressedStyle={{ backgroundColor: '#add', opacity: 0.5 }}
                    defaultStyle={{ backgroundColor: '#aaa', opacity: 1 }}
                >
                    <FontAwesome name="trash" size={24} color="black" />
                </PressableButton>
                ),
            });
        }, [navigation], handleDelete);


    
    return (
        <View>
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

                { overBudget && (

                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxContainerText}>This item is marked as overbudget. Select the checkbox if you would like to approve it.</Text>
                    <Checkbox
                        checked={isChecked}
                        onChange={setIsChecked}
                    />
                </View>
                    
                )}

                
                <SaveCancelButtons
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                />
                
            </View>
      

        </View>
    );
    }

    const styles = StyleSheet.create({
        inputFormContainer: {
          marginBottom: '30%',
        },
        checkboxContainer: {
            margin: 20,
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        checkboxContainerText: {
            fontSize: 14,
            marginRight: 10,
            color: '#190482',
        },
      });

export default EditScreen;


