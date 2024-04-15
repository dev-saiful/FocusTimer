import { View, Text } from 'react-native';
import React from 'react';

export default function Timer({focusSubject}) {
  return (
    <View>
      <Text>Foucs on {focusSubject}</Text>
    </View>
  )
}