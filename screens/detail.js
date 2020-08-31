import React from "react";
import { View, Text } from "react-native";

export default function Detail({ navigation }) {
  return (
    <View>
      <Text>{navigation.getParam("name")}</Text>
    </View>
  );
}
