import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Detail({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: navigation.getParam("uri") }}
        style={styles.imageSize}
      />
      <Text style={{ textAlign: "center" }}>{navigation.getParam("name")}</Text>
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Reservation");
          }}
        >
          <Text style={styles.buttonText}>예약하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageSize: {
    width: "100%",
    height: 350,
  },
  buttonWrap: {
    bottom: 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    position: "absolute",
    backgroundColor: "#94E2F7",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
