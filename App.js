import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
  View,
} from "react-native";
import { colors } from "./src/utils/colors";
import Focus from "./src/features/Focus";

export default function App() {
  const [currSubject, setCurrSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      
      {!currSubject ? (
        <Focus addSubject={setCurrSubject}/>
      ) : (
        <View>
          <Text>Focus On : {currSubject}</Text>
        </View>
      )}
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.skyBlue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: colors.white,
  },
});
