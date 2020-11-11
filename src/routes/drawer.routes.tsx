import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => (
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close"
          onPress={() => {
            props.navigation.closeDrawer();
          }}
        />
      </DrawerContentScrollView>
    )}
  >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Details" component={Details} />
  </Drawer.Navigator>
);

export default DrawerRoutes;
