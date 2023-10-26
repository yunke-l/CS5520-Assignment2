import React from "react";
import { View, Text} from "react-native";
import PressableButton from "./PressableButton";
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from "../styles/colors";
import GlobalStyles from "../styles/StylesHelper";



const Entry = ({entry}) => {

    const navigation = useNavigation();


    function editHandler () {
        navigation.navigate('Edit', {currentEntry: entry});
    }

    return (
        
        <PressableButton 
            pressedFunction={editHandler}
            pressedStyle={[GlobalStyles.entryContainer, {backgroundColor: colors.entryPressed, opacity: 0.5}]}
            defaultStyle={[GlobalStyles.entryContainer, {backgroundColor: colors.entry, opacity: 1}]}
            >
            <Text style={GlobalStyles.entryItemText}>{entry.item}</Text>

            <View style={GlobalStyles.entryQuantityContainer}>
            {entry.overBudget && ( 
                <><Foundation name="alert" size={30} color={colors.iconFocused} /><Text>    </Text></>
            )}

                <Text style={GlobalStyles.entryQuantityText}>{entry.quantity} * {entry.unitPrice}</Text>
            </View>
        </PressableButton>

       
    )
}

export default Entry;
