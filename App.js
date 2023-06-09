import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, HStack, Banner, Stack, Text } from "@react-native-material/core";
import TrainSearch from "./components /TrainSearch/TrainSearch";
import TrainInfo from "./components /TrainInfo/TrainInfo";

export default function App() {
  return (
    <SafeAreaView style={{marginTop: 30}}>
    <View >

      <StatusBar  />

      <Text variant="button" style={{textAlign: 'center', fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    backgroundColor: 'yellow',}}>Track My Train</Text>
      

      <TrainSearch />
     <TrainInfo />
    </View>
    </SafeAreaView>
  );
}
