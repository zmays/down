import React, { useState } from 'react';
import { StyleSheet, View, TextInput, AsyncStorage, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetItDown from './src/GetItDown'
import ShowMe from './src/ShowMe'
import { Routes } from './src/navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName={Routes.add} >
        <Stack.Screen name={Routes.add} component={GetItDown} />
        <Stack.Screen name={Routes.display} component={ShowMe} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
