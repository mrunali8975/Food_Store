import {View, Text} from 'react-native';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screen/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ResultsShow from './src/screen/ResultsShow';
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
       <Stack.Screen
        name="ResultsShow"
        options={{
          title: 'Results Show',
          headerTitleAlign:'center'
        }}
        component={ResultsShow}
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
