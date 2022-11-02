import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Button } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function Discover(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = (item) => {};

  return (
    <View>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
        <View style={styles.categoriesItemContainer}>
          <Button title='sth' />
          <Text style={styles.categoriesInfo}>test</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
