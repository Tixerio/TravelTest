import { Redirect, Stack } from 'expo-router';

export default function AboutLayout() {
  return <Stack>
    <Stack.Screen name="Home" options={{
        headerShown: false
    }} />
    <Stack.Screen name="About" options={{
        headerTransparent: true
    }}/>
  </Stack>;
}
 