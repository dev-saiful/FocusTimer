import { SafeAreaView,StyleSheet, Text, StatusBar,Platform} from 'react-native';
import { colors } from './src/utils/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Starting New Journey with React Native</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.skyBlue,
    paddingTop:Platform.OS === "android" ? StatusBar : 0,
  },
  text:{
    color:colors.white,
  }
});
