import React, { useState } from 'react';
import { View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import InputComp from './InputComp';
import GlobalStyles from '../styles/StylesHelper';

const InputForm = ({ item, unitPrice, quantity, setItem, setUnitPrice, setQuantity }) => {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);

    const quantities = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <View style={GlobalStyles.inputFormContainer}>
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
    
    
            <Text style={GlobalStyles.inputFormText}>Quantity *</Text>
            <DropDownPicker 
            placeholder={quantity}
            open={open}
            setOpen={setOpen}
            value={value}
            setValue={(val) => {setQuantity(val); setValue(val)}}
            items= {quantities.map((val) => ({label: val, value: val}))}
            defaultValue={unitPrice}
            autoScroll={true}
            style={GlobalStyles.dropDown}
            textStyle={GlobalStyles.dropDownText}
            labelStyle={GlobalStyles.dropDownLabel}
            />
    
        </View>
      );
    };



export default InputForm;