import React from 'react';
import { View } from "react-native";
import { HStack } from "@react-native-material/core";

const TrainInfo = () => {
    return (
        <HStack m={4} spacing={6}>
        <View style={{ width: 40, height: 40, backgroundColor: "#faf089" }} />
        <View style={{ width: 40, height: 40, backgroundColor: "#ff6347" }} />
        <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
      </HStack>
    
    )
}

export default TrainInfo