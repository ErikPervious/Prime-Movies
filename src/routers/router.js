import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Movies } from '../pages/Movies';
import { StackRoutes } from './stackRoutes';

import colors from '../styles/colors';

const Drawer = createDrawerNavigator();

export function Routes() {
  return(
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.black,
          paddingTop: 10
        },
        drawerActiveBackgroundColor: colors.red,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.white
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: 'Inicio',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : 'movie-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />    
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Meus Filmes',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name={focused ? 'archive' : 'archive-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />   
    </Drawer.Navigator> 
  )
}