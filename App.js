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
import Timer from "./src/features/Timer";

export default function App() {
  const [currSubject, setCurrSubject] = useState("test");
  return (
    <SafeAreaView style={styles.container}>
      
      {!currSubject ? (
        <Focus addSubject={setCurrSubject}/>
      ) : (
        <Timer
        focusSubject={currSubject}
        onTimerEnd={()=>{}}
        clearSubject={()=>{}}
        />
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
