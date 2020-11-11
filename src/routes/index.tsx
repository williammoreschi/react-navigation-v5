import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './stack.routes';
import Drawer from './drawer.routes';
import DrawerStackRoutes from './drawerStack.routes';
import DrawerStackTabRoutes from './drawerStackTabBottom.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      {/* <Stack /> */}
      {/* <Drawer /> */}
      {/* <DrawerStackRoutes /> */}
      <DrawerStackTabRoutes />
    </NavigationContainer>
  );
};

export default Routes;
