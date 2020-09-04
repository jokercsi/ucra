import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default class Detail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imageWrap}>
          <Image
            source={{ uri: this.props.navigation.getParam("uri") }}
            style={styles.imageSize}
          />
          <Text style={styles.cafeTitle}>
            {this.props.navigation.getParam("name")}
          </Text>
        </View>
        <View style={styles.menuContainer}>
          <Text style={{ fontSize: 15 }}>메뉴</Text>
          <View style={styles.menuWrap}>
            <View style={styles.menubox}>
              <Image
                source={{ uri: this.props.navigation.getParam("menuImg1") }}
                style={styles.menuImageSize}
              />
              <Text>{this.props.navigation.getParam("menu1")}</Text>
            </View>
            <View style={styles.menubox}>
              <Image
                source={{ uri: this.props.navigation.getParam("menuImg2") }}
                style={styles.menuImageSize}
              />
              <Text>{this.props.navigation.getParam("menu2")}</Text>
            </View>

            <View style={styles.menubox}>
              <Image
                source={{ uri: this.props.navigation.getParam("menuImg3") }}
                style={styles.menuImageSize}
              />
              <Text>{this.props.navigation.getParam("menu3")}</Text>
            </View>
            <View style={styles.menubox}>
              <Image
                source={{ uri: this.props.navigation.getParam("menuImg4") }}
                style={styles.menuImageSize}
              />
              <Text>{this.props.navigation.getParam("menu4")}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Reservation");
            }}
          >
            <Text style={styles.buttonText}>예약하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageWrap: {
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  imageSize: {
    width: "100%",
    height: 300,
  },
  cafeTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  menuWrap: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#333",
  },
  menubox: {
    width: "50%",
    backgroundColor: "#fff",
  },
  menuImageSize: {
    width: "100%",
    height: 150,
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

  menuSize: {
    width: 60,
    height: 50,
  },
});
