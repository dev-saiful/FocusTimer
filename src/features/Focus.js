import { View, Text,StyleSheet, } from 'react-native';
import {TextInput} from "react-native-paper";
import React, { useState } from 'react';
import { colors } from '../utils/colors';

export default function Focus() {
    const [subject,setSubject] = useState(null);
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
        <TextInput onChangeText={setSubject} label="Which thing you want to focus on?"/>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inputContainer:{
        flex:0.5,
        padding:25,
        justifyContent:"top",
    },
    text:{
        color:colors.white,
    }
})