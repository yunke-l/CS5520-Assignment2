import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import PressableButton from '../components/PressableButton';

const SaveCancelButtons = ({ handleSave, handleCancel }) => {
    return (
        <View style={styles.buttonContainer}>
            <PressableButton
                pressedFunction={handleCancel}
                pressedStyle={styles.cancelPressed}
                defaultStyle={styles.default}
            >
                <Text style={styles.buttonText}>Cancel</Text>
            </PressableButton>

            <PressableButton
                pressedFunction={handleSave}
                pressedStyle={styles.savePressed}
                defaultStyle={styles.default}
            >
                <Text style={styles.buttonText}>Save</Text>
            </PressableButton>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelPressed: {
        backgroundColor: '#C70039',
    },
    savePressed: {
        backgroundColor: '#0B666A',
    },
    default: {
        backgroundColor: '#4B527E',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    });

export default SaveCancelButtons;