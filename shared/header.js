import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Header extends Component {
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View style={styles.header}>
        <MaterialIcons
          name="menu"
          size={28}
          onPress={this.openMenu.bind(this)}
          style={styles.icon}
        />
        <Text style={styles.title}> UCRA </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    letterSpacing: 2,
  },
  icon: {
    position: "absolute",
    left: 1,
  },
});
