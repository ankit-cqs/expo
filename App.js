import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button,HStack, Banner } from "@react-native-material/core";

export default function App() {
  return (
    <View>
      <Text>Track My Train</Text>
      <StatusBar style="auto" />
      <Banner
    text="There was a problem processing a transaction on your credit card."
    buttons={
      <HStack spacing={2}>
        <Button key="fix-it" variant="text" title="Fix it" compact />
        <Button key="learn-more" variant="text" title="Learn More" compact />
      </HStack>
    }
  />

      <Button title="Start working" />
    </View>
  );
}


