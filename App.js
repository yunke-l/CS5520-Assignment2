import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpensesScreen from './screens/All';
import OverbudgetExpensesScreen from './screens/Overbudget';
import BottomTabBar from './components/BottomTabBar';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="All Expenses" component={AllExpensesScreen} />
        <Tab.Screen name="Overbudget Expenses" component={OverbudgetExpensesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



