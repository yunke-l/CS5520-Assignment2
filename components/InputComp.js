import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
// import StyleHelper from '../helpers/StyleHelper';

const InputComp = ({label, value, onChangeText, error}) => {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );

};



const styles = StyleSheet.create({
     // input component styles
    inputContainer: {
        marginBottom: '5%',
    },
    input: {
        width: '100%',
        height: 30,
        borderRadius: 8,
        backgroundColor: 'white',
        alignSelf: 'flex-start', 
        fontSize: 18,
        color: '#190482',
        textAlign: 'left',
    },
    
    inputText: {
        color: '#190482',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginBottom: '2%',
    },


});


export default InputComp;