import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Favorites!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });export default FavoritesScreen;
