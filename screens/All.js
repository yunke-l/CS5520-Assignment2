import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from '../firebase/FirebaseSetup';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import EntriesList from '../components/EntriesList';


function AllExpensesScreen() {
    const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesCol = collection(database, 'Expenses');
    
    const unsubscribe = onSnapshot(expensesCol, (snapshot) => {
      const expensesList = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
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


export default AllExpensesScreen;