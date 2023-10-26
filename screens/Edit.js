import React, { useState, useLayoutEffect } from 'react';
import { View, Alert, Text, StyleSheet} from 'react-native';
import { editInDB, deleteFromDB } from '../firebase/FirebaseHelper';
import PressableButton from '../components/PressableButton';
import Checkbox from '../components/Checkbox';
import InputForm from '../components/InputForm';
import SaveCancelButtons from '../components/SaveCancelButtons';
import { FontAwesome } from '@expo/vector-icons';
import { validateInputs } from '../components/Validation';
import GlobalStyles from '../styles/StylesHelper';
import colors from '../styles/colors';

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
        const deleteEntry = () => {
            try {
                deleteFromDB(currentEntry.id);
                navigation.goBack();
            }
            catch (error) {
                Alert.alert('Error', 'An error occurred while deleting the entry.');
            }
        };
    
        Alert.alert(
            'Confirmation', 
            'Are you sure you want to delete this item?', 
            [
                {
                    text: 'Cancel',
                    onPress: () => {}, 
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: deleteEntry, 
                    style: 'destructive',
                },
            ]
        );
    };


    // delete button
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <PressableButton
                    pressedFunction={handleDelete}
                    pressedStyle={{ backgroundColor: colors.header, opacity: 0.5 }}
                    defaultStyle={{ backgroundColor: colors.header, opacity: 1 }}
                >
                    <FontAwesome name="trash" size={24} color="white" />
                </PressableButton>
                ),
            });
        }, [navigation], handleDelete);


    
    return (
        <View style={GlobalStyles.container}>
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
          marginBottom: '40%',
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


