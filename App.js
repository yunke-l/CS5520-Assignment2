import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpensesScreen from './screens/All';
import OverbudgetExpensesScreen from './screens/Overbudget';
import AddAnExpenseScreen from './screens/Add';
import BottomTabBar from './components/BottomTabBar';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
//         <Tab.Screen name="All Expenses" component={AllExpensesScreen} />
//         <Tab.Screen name="Overbudget Expenses" component={OverbudgetExpensesScreen} />
//       </Tab.Navigator>

//     </NavigationContainer>
//   );
// }

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen 
        name="All Expenses" 
        component={AllExpensesScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Add An Expense')}
              title="+"
            />
          ),
        })}
      />
      <Tab.Screen 
        name="Overbudget Expenses" 
        component={OverbudgetExpensesScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Add An Expense')}
              title="+"
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Add An Expense" component={AddAnExpenseScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




