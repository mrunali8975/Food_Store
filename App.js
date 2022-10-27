import {View, Text} from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screen/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="BusinessScreen">
      <Stack.Screen
        name="BusinessScreen"
        options={{
          title: 'Business Screen',
          headerTitleAlign:'center'
        }}
        component={SearchScreen}
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
}
const App = () => {
  return (
      <MyStack />
  );
};

export default App;
