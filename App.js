import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import styles from './GlobalStyle';

import Task from './src/pages/Task/Task';
import NewTask from './src/pages/NewTask/NewTask';
import Details from './src/pages/Details/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.HomeContainer}>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{headerTintColor: '#0d0d0d', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{headerTintColor: '#0d0d0d', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerTintColor: '#0d0d0d', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
