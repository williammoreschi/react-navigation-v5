import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigationRoutes from './tabBottom.routes';
import { DrawerContent } from './drawerContent.routes';
import Support from '../pages/Support';

const Drawer = createDrawerNavigator();

const DrawerStackTabRoutes: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="HomeDrawer" component={TabNavigationRoutes} />
    <Drawer.Screen name="Support" component={Support} />
  </Drawer.Navigator>
);

export default DrawerStackTabRoutes;
