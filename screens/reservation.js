import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { TouchableOpacity, Dimensions } from "react-native";

const win = Dimensions.get("window");

export default class Reservation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageSize}>
          <ImageBackground
            style={styles.imageStyle}
            source={require("../assets/blueprint.png")}
          >
            <TouchableOpacity
              style={styles.seat1}
              onPress={() => {
                this.props.navigation.navigate("Confirm");
              }}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.seat2}
              onPress={() => {
                this.props.navigation.navigate("Confirm");
              }}
            ></TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.bannerWrap}>
          <Image
            style={styles.banner}
            source={require("../assets/banner.jpg")}
            accessibilityLabel="banner"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seat1: {
    top: 50,
    right: 0,
    position: "absolute",
    width: 200,
    height: 150,
  },
  seat2: {
    bottom: 0,
    right: 0,
    position: "absolute",
    width: 100,
    height: 300,
  },
  imageStyle: {
    alignSelf: "stretch",
    width: win.width,
    height: 500,
    resizeMode: "cover",
  },
  bannerWrap: {
    bottom: 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  banner: {
    width: "100%",
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
});
