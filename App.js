import React from 'react';
import { SafeAreaView,StyleSheet, Text, StatusBar,Platform} from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.skyBlue,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text:{
    color:colors.white,
  }
});
