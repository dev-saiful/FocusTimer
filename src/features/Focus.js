import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { colors } from "../utils/colors";
import {spacing} from '../utils/sizes';
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
    padding: spacing.sm,
    paddingTop: spacing.lg,
    justifyContent: "top",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  btn: {
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
