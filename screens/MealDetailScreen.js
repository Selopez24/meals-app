import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text >Details!</Text>
      <Button
        title="Go Back to Categories!"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
