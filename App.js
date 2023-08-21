import React from 'react';
import { View, FlatList, Text, Button, TextInput, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DisplayPage from './components/DisplayPage';
import AddNew from './components/AddNew'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DisplayPage">
        <Stack.Screen name="Fordon" component={DisplayPage} />
        <Stack.Screen name="AddNew" component={AddNew} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});