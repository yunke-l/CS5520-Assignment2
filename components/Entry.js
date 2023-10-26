import React from "react";
import { View, Text, StyleSheet} from "react-native";
import PressableButton from "./PressableButton";
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from "../styles/colors";



const Entry = ({entry}) => {

    const navigation = useNavigation();


    function editHandler () {
        navigation.navigate('Edit', {currentEntry: entry});
    }

    return (
        
        <PressableButton 
            pressedFunction={editHandler}
            pressedStyle={[styles.entryContainer, {backgroundColor: colors.entryPressed, opacity: 0.5}]}
            defaultStyle={[styles.entryContainer, {backgroundColor: colors.entry, opacity: 1}]}
            >
            <Text style={styles.entryItemText}>{entry.item}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {entry.overBudget && ( 
                <><Foundation name="alert" size={30} color={colors.iconFocused} /><Text>    </Text></>
            )}

                <Text style={styles.entryQuantityText}>{entry.quantity} * {entry.unitPrice}</Text>
            </View>
        </PressableButton>

       
    )
}


const styles = StyleSheet.create({
    entryContainer: {
        // backgroundColor: '#7895CB',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        // add shade to the background
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    deleteButton: {
        borderRadius: 5,
        padding: 5,
        margin: 5,
        fontSize: 30,
    },
    entryItemText: {
        borderRadius: 5,
        color: colors.entryItemText,
        fontSize: 24,
        alignSelf: 'center',
        padding: 10,
        overflow: 'hidden'
    },
    entryQuantityText: {
        borderRadius: 5,
        color: colors.entryQuantityText,
        backgroundColor: colors.entryQuantityBackground,
        fontSize: 20,
        alignSelf: 'center',
        padding: 8,
        overflow: 'hidden',
    },
})


export default Entry;
