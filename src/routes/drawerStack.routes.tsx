import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const HomeStackScreen: React.FC = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Overview',
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen: React.FC = () => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <DetailsStack.Screen name="Details" component={Details} />
  </DetailsStack.Navigator>
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerStackRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={HomeStackScreen} />
    <Drawer.Screen name="Details" component={DetailsStackScreen} />
  </Drawer.Navigator>
);

export default DrawerStackRoutes;
