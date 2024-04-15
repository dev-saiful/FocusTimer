import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedBtn';

export default function Timer({focusSubject}) {
    const [isStarted,setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown isPaused={!isStarted} onProgress={()=>{}} onEnd={()=>{}}/>
      </View>
      <View style={styles.btnWrapper}>
        {!isStarted && 
        (<RoundedButton title="start" onPress={()=>{setIsStarted(true)}}/>)
        }
       {isStarted && 
       ( <RoundedButton title="pause" onPress={()=>{setIsStarted(false)}}/>)
       }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    countDown:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"center",
    },
    btnWrapper:{
        flex:0.3,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    }
})