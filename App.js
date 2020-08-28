import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./routes/drawer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
