import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntriesList from '../components/EntriesList';
import { database } from '../firebase/FirebaseSetup';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';

function OverbudgetExpensesScreen() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesCol = collection(database, 'Expenses');
    
    const unsubscribe = onSnapshot(expensesCol, (snapshot) => {
      // only select budgets over 500
      const expensesList = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      })).filter((expense) => expense.quantity * expense.unitPrice > 500);
      setExpenses(expensesList);
    });

    return () => unsubscribe();
  }, []);

    return (
        <View style={styles.container}>
            <EntriesList entries={expenses}/>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default OverbudgetExpensesScreen;