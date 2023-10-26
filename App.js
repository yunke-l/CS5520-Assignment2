import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllExpensesScreen from './screens/All';
import OverbudgetExpensesScreen from './screens/Overbudget';
import AddAnExpenseScreen from './screens/Add';
import EditScreen from './screens/Edit';
import BottomTabBar from './components/BottomTabBar';
import colors from './styles/colors';
import PressableButton from './components/PressableButton';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const defaultHeaderOptions = {
  headerShown: false,
  headerStyle: {
    backgroundColor: colors.header,
  },
  headerTintColor: colors.headerText,
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
};


function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen 
        name="All Expenses" 
        component={AllExpensesScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <PressableButton
              pressedFunction={() => navigation.navigate('Add An Expense')}
              pressedStyle={{ 
                backgroundColor: colors.header,
                marginRight: 10,
              }}
              defaultStyle={{ 
                backgroundColor: colors.header,
                marginRight: 10,
              }}
            >
              <Ionicons name="add" size={30} color="white" />
            </PressableButton>
          ),
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },

        })
      }
      />
      <Tab.Screen 
        name="Overbudget Expenses" 
        component={OverbudgetExpensesScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <PressableButton
              pressedFunction={() => navigation.navigate('Add An Expense')}
              pressedStyle={{ 
                backgroundColor: colors.header,
                marginRight: 10,
              }}
              defaultStyle={{ 
                backgroundColor: colors.header,
                marginRight: 10,
              }}
            >
              <Ionicons name="add" size={30} color="white" />
            </PressableButton>
          ),
          headerStyle: {
            backgroundColor: colors.header,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        })}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultHeaderOptions}>
        <Stack.Screen 
          name="Tabs" 
          component={TabNavigator} 
        />

        <Stack.Screen 
          name="Add An Expense" 
          component={AddAnExpenseScreen} 
          options={{ 
            headerShown: true,
            }} 
        />

        <Stack.Screen 
          name="Edit" 
          component={EditScreen} 
          options={{ 
            headerShown: true,
             }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

