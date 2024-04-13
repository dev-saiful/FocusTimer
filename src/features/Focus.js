import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedBtn";

export default function Focus({addSubject}) {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="Which thing you want to focus on?"
        />
        <View style={styles.btn}>
          <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 25,
    justifyContent: "top",
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  btn: {
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
