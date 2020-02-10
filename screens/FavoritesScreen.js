import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { useSelector } from "react-redux";

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default FavoritesScreen;
