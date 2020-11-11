import React from 'react';
import { View, Text, Button } from 'react-native';

const Support: React.FC = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
      }}
    >
      <Text>Support</Text>
      <Button
        title="Toggle Drawer"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </View>
  );
};

export default Support;
