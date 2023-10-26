import React from 'react';
import { View, Text } from 'react-native';
import PressableButton from '../components/PressableButton';
import GlobalStyles from '../styles/StylesHelper';

const SaveCancelButtons = ({ handleSave, handleCancel }) => {
    return (
        <View style={GlobalStyles.buttonContainer}>
            <PressableButton
                pressedFunction={handleCancel}
                pressedStyle={GlobalStyles.cancelPressed}
                defaultStyle={GlobalStyles.default}
            >
                <Text style={GlobalStyles.buttonText}>Cancel</Text>
            </PressableButton>

            <PressableButton
                pressedFunction={handleSave}
                pressedStyle={GlobalStyles.savePressed}
                defaultStyle={GlobalStyles.default}
            >
                <Text style={GlobalStyles.buttonText}>Save</Text>
            </PressableButton>
        </View>
    );
}

export default SaveCancelButtons;