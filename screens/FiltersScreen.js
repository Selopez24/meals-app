import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/colors";

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.value}
        onValueChange={newValue => props.onChange(newValue)}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGluenFree, setIsGluenFree] = useState(false);
  const [isLactosaFree, setIsLactosaFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGluenFree,
      lactosaFree: isLactosaFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    console.log(appliedFilters);
  }, [isGluenFree, isLactosaFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: () => {
        saveFilters();
      }
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaiable Filters</Text>
      <FilterSwitch
        label="Glueten-free"
        value={isGluenFree}
        onChange={newValue => setIsGluenFree(newValue)}
      />
      <FilterSwitch
        label="Lactosa-free"
        value={isLactosaFree}
        onChange={newValue => setIsLactosaFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        value={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

export default FiltersScreen;
