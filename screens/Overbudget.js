import * as React from 'react';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import EntriesList from '../components/EntriesList';
import { database } from '../firebase/FirebaseSetup';
import { collection, onSnapshot} from 'firebase/firestore';
import GlobalStyles from '../styles/StylesHelper';

function OverbudgetExpensesScreen() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const expensesCol = collection(database, 'Expenses');
    
    const unsubscribe = onSnapshot(expensesCol, (snapshot) => {
      // only select budgets over 500
      const expensesList = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      })).filter((expense) => expense.overBudget);
      setExpenses(expensesList);
    });

    return () => unsubscribe();
  }, []);

    return (
        <View style={GlobalStyles.container}>
            <EntriesList entries={expenses}/>
        </View>
    );
    }


export default OverbudgetExpensesScreen;