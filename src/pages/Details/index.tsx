import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Details: React.FC = () => {
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
      <Text style={{ marginBottom: 10 }}>Details Screen</Text>
      <TouchableOpacity
        style={{
          marginBottom: 10,
          backgroundColor: '#000fff',
          padding: 20,
        }}
        onPress={() => {
          navigation.push('Details');
        }}
      >
        <Text style={{ color: '#fff' }}>Go to Details Screen... Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10,
          backgroundColor: '#000fff',
          padding: 20,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={{ color: '#fff' }}>Go to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10,
          backgroundColor: '#000fff',
          padding: 20,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={{ color: '#fff' }}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginBottom: 10,
          backgroundColor: '#000fff',
          padding: 20,
        }}
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text style={{ color: '#fff' }}>Go to the first screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
