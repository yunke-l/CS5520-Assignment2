import React from 'react';
import {Text, TextInput, View} from 'react-native';
import GlobalStyles from '../styles/StylesHelper';

const InputComp = ({label, value, onChangeText, error}) => {

    return (
        <View style={GlobalStyles.inputContainer}>
            <Text style={GlobalStyles.inputText}>{label}</Text>
            <TextInput
                style={GlobalStyles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );

};

export default InputComp;