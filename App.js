import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routers/router';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}