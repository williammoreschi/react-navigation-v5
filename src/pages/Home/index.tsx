import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
      }}
    >
      <Text>Home</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};

export default Home;
