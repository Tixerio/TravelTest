import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import { theme } from '../../theme/theme.js';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <Link href="screens/About" asChild> 
        <Button title='About'/>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: theme.casualButton
  }
});
