import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { writeToDB, editInDB, deleteFromDB } from '../firebase/FirebaseHelper';
import InputComp from '../components/InputComp';
import PressableButton from '../components/PressableButton';
import AddAnExpenseScreen from './Add';
import { collection, onSnapshot, getDocs, setDocs } from 'firebase/firestore';
import Checkbox from '../components/Checkbox';

// use AddAnExpenseScreen as a template for this screen
function EditScreen( {navigation, route} ) {
    const { currentEntry } = route.params;
    const [item, setItem] = useState(currentEntry.item);
    const [unitPrice, setUnitPrice] = useState(currentEntry.unitPrice.toString());
    const [quantity, setQuantity] = useState(currentEntry.quantity.toString());
    const [quantities, setQuantities] = useState([ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    // Save button handler
    const handleSave = async () => {
        // Validation
        // empty inputs
        if (!item || !unitPrice || !quantity) {
            Alert.alert('Please check your input values.');
            return;
        }

        // invalid inputs
        if (isNaN(unitPrice) || unitPrice <= 0) {
            Alert.alert('Unit price must be a number greater than 0.');
            return;
        }
        if (isNaN(quantity) || quantity <= 0) {
            Alert.alert('Quantity must be a number greater than 0.');
            return;
        }

        const entry = {
            item,
            unitPrice: parseInt(unitPrice),
            quantity: parseInt(quantity),
        };

        try {
            if (isChecked) {
                await editInDB(currentEntry.id, entry);
            }
        }
        catch (error) {
            Alert.alert('Error', 'An error occurred while saving the entry.');
        }

        navigation.goBack();
    }


    // Cancel button handler
    const handleCancel = () => {
        navigation.goBack();
    };

    // delete button handler
    const handleDelete = async () => {
        try {
            if (isChecked) {
                await deleteFromDB(currentEntry.id);
            }
            await deleteFromDB(currentEntry.id);
        }
        catch (error) {
            Alert.alert('Error', 'An error occurred while deleting the entry.');
        }

        navigation.goBack();
    }

    
    return (
        <View style={{ padding: 20 }}>
      <InputComp
        label="Item *"
        value={item}
        onChangeText={setItem}
        // error={item ? null : 'Please enter an item.'}

        />

        <InputComp
        label="Unit Price *"
        value={unitPrice}
        onChangeText={setUnitPrice}
        // error={unitPrice ? null : 'Please enter a unit price.'}
        />


        <Text style={{fontSize: 20}}>Quantity *</Text>
        <DropDownPicker 
        placeholder={quantity}
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={(val) => {setQuantity(val); setValue(val)}}
        items= {quantities.map((val) => ({label: val, value: val}))}
        defaultValue={unitPrice}
        style={{backgroundColor: '#fafafa'}}
        />

        <View>
        <Text style={{fontSize: 20}}>This item is marked as overbudget. Select the checkbox if you would like to approve it.</Text>
        <Checkbox
            // label="Overbudget"
            checked={currentEntry.quantity * currentEntry.unitPrice > 500}
            onChange={() => {}}
        />
        </View>

        <View>
            <PressableButton
                pressedFunction={handleSave}
                pressedStyle={{backgroundColor: 'blue'}}
                defaultStyle={{backgroundColor: '#aaa'}}
            >
                <Text style={{color: 'white', fontSize: 20}}>Save</Text>
            </PressableButton>

            <PressableButton
                pressedFunction={handleCancel}
                pressedStyle={{backgroundColor: 'red'}}
                defaultStyle={{backgroundColor: '#aaa'}}
            >
                <Text style={{color: 'white', fontSize: 20}}>Cancel</Text>
            </PressableButton>
            

        </View>

    </View>
    );
    }



export default EditScreen;


