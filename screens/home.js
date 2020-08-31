import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../shared/card";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { globalStyle } from "../style/global";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cafe: [
        {
          name: "스타벅스",
          position: "Data Entry Clerk",
        },
        {
          name: "할리스",
          position: "Sales Manager",
        },
      ],
    };
  }

  render() {
    return (
      <View style={globalStyle.container}>
        <FlatList
          data={this.state.cafe}
          renderItem={({ item }) => (
            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Detail", item);
                }}
              >
                <Card>
                  <Text>{item.name}</Text>
                </Card>
              </TouchableOpacity>
            </View>
          )}
        />
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
