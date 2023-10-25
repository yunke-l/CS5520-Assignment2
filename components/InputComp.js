import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
// import StyleHelper from '../helpers/StyleHelper';

const InputComp = ({label, value, onChangeText, error}) => {

    return (
        // <View style={StyleHelper.inputContainer}>
        //     <Text style={StyleHelper.inputText}>{label}</Text>
        //     <TextInput
        //         style={StyleHelper.input}
        //         value={value}
        //         onChangeText={onChangeText}
        //     />
        //     {error && <Text style={StyleHelper.inputError}>{error}</Text>}
        // </View>

        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            {/* {error && <Text>{error}</Text>}  */}
        </View>
    );

};



const styles = StyleSheet.create({
     // input component styles
    inputContainer: {
        width: '100%',
        marginBottom: '15%',
    },
    input: {
        width: '100%',
        borderBottomColor: 'blue',
        borderWidth: 2,
        alignSelf: 'flex-start', 
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 8,
    },
    
    inputError: {
        color: 'black',
        fontSize: 15,
    },
    inputText: {
        color: 'blue',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginBottom: '10%',
    },


});


export default InputComp;