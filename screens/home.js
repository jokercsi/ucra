import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* {header} */}
        <View style={styles.content}>{/* 내용 */}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
});
