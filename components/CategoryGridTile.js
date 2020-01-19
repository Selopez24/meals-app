import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { hide } from "expo/build/launch/SplashScreen";

const CategoryGridTile = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.gridItem}
      onPress={() => {
        props.onSelect();
      }}
    >
      <View
        style={{ ...styles.tileContainer, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    overflow: "hidden",
    elevation: 5
  },
  tileContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontSize: 22,
    fontFamily: "open-sans-bold",
    textAlign: "right"
  }
});

export default CategoryGridTile;
