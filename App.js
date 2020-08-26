import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Login to Jibin App</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff9a9a",
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6ca1a",
  },

  input: {
    width: "80%",
    backgroundColor: "#F0EDEF",
    padding: 15,
    margin: 10,
  },

  loginContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9aa9ff",
  },

  loginButton: {
    backgroundColor: "#94E2F7",
    padding: 15,
  },

  loginText: {
    fontSize: 18,
    textAlign: "center",
  },

  footer: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  signupButton: {
    width: "80%",
    backgroundColor: "#94E2F7",
    alignItems: "center",
    padding: 15,
  },

  signupText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
