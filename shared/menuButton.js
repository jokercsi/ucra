import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class menuButton extends Component {
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  render() {
    return (
      <View>
        <MaterialIcons
          name="menu"
          size={24}
          style={styles.icon}
          onPress={this.openMenu.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    padding: 10,
  },
});
