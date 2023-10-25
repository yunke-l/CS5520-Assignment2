import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import InputComp from './InputComp';

const InputForm = ({ item, unitPrice, quantity, setItem, setUnitPrice, setQuantity }) => {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);

    const quantities = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <View style={styles.inputFormContainer}>
          <InputComp
            label="Item *"
            value={item}
            onChangeText={setItem}    
            />
    
            <InputComp
            label="Unit Price *"
            value={unitPrice}
            onChangeText={setUnitPrice}
            />
    
    
            <Text style={styles.inputFormText}>Quantity *</Text>
            <DropDownPicker 
            placeholder={quantity}
            open={open}
            setOpen={setOpen}
            value={value}
            setValue={(val) => {setQuantity(val); setValue(val)}}
            items= {quantities.map((val) => ({label: val, value: val}))}
            defaultValue={unitPrice}
            autoScroll={true}
            style={styles.dropDown}
            textStyle={styles.dropDownText}
            labelStyle={styles.dropDownLabel}
            />
    
        </View>
      );
    };

const styles = StyleSheet.create({
    inputFormContainer: {
        padding: 20, 
      },
      inputFormText: {
        fontSize: 16, 
        marginBottom: 5, 
        fontWeight: 'bold',
        color: '#190482',
      },
      dropDown: {
        backgroundColor: 'white',
        marginBottom: 20, 
        borderRadius: 5,
        borderColor: '#190482',
      },

        dropDownText: {
            fontSize: 18,
            color: '#190482',
            fontWeight: 'bold',
        },
        dropDownLabel: {
            fontSize: 18,
            color: '#190482',
            fontWeight: 'bold',
        },

});



export default InputForm;