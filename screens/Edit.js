import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { writeToDB } from '../firebase/FirebaseHelper';
import InputComp from '../components/InputComp';
import PressableButton from '../components/PressableButton';
import AllExpensesScreen from './All';

function EditScreen( {navigation} ) {
    return (
        <View>
            <Text>Edit Screen</Text>
        </View>
    );
    }



export default EditScreen;


