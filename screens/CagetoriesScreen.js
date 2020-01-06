import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CagetoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

CagetoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CagetoriesScreen;
