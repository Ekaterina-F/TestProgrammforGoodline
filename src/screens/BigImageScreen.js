import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { w, h } from "./../constants";

export default class BigImageScreen extends Component {
  render() {
    const params = this.props.navigation.getParam("url");

    return (
      <View>
        <Image style={styles.image} source={{ uri: params }} />
      </View>
    );
  }
}

BigImageScreen.navigationOptions = {
  headerTitle: "Photo"
};

const styles = StyleSheet.create({
  image: {
    width: w ,
    height: w / 0.65,
    resizeMode: "stretch"
  }
});
