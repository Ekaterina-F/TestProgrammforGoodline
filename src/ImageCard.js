import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { w } from "./constants";

export const ImageCard = props => {
  const { src } = props.data;

  const onOpen = url => {
    props.onOpen(url);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(src.large)}>
      <View style={styles.view}>
        <Image style={styles.image} source={{ uri: src.medium }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 13,
    width: w / 2.3,
    height: w * 0.65,
    borderRadius: 10
  },

  view: {
    width: w / 2
  }
});
