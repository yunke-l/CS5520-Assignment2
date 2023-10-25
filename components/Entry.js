import React from "react";
import { Text, StyleSheet} from "react-native";
import PressableButton from "./PressableButton";
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const Entry = ({entry}) => {

    const navigation = useNavigation();


    function editHandler () {
        navigation.navigate('Edit', {currentEntry: entry});
    }

    return (
        
        <PressableButton 
            pressedFunction={editHandler}
            pressedStyle={[styles.goalContainer, {backgroundColor: '#add', opacity: 0.5}]}
            defaultStyle={[styles.goalContainer, {backgroundColor: '#aaa', opacity: 1}]}
            >
            <Text style={styles.text}>{entry.item}</Text>

            {entry.overBudget && ( 
                <Foundation name="alert" size={24} color="red" />
            )}

            <Text style={styles.text}>{entry.quantity} * {entry.unitPrice}</Text>
            
        </PressableButton>

       
    )
}


const styles = StyleSheet.create({
    goalContainer: {
        backgroundColor: '#aaa',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    },
    deleteButton: {
        borderRadius: 5,
        padding: 5,
        margin: 5,
        fontSize: 30,
    },
    text: {
        borderRadius: 5,
        color: 'darkred',
        fontSize: 30,
        alignSelf: 'center',
        padding: 15,
        overflow: 'hidden',

    }
})


export default Entry;
