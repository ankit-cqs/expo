import React from 'react';
import { Stack, IconButton,TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, } from "react-native";
const TrainSearch = () => {
    return (
        <View style={{marginTop: 20, padding: 10, borderRadius: 10}} >
          <TextInput
          color="white"
          backgroundColor="#1C50D0"
          inputStyle={{color: 'white', textColor: 'white'}}
          style={{ borderRadius: 40, color: "white" }}
      label="Where is my train?"
      trailing={props => (
        <IconButton icon={props => <Icon name="train" {...props} />} {...props} />
      )}
    />
        </View>
    )
}

export default TrainSearch;