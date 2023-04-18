import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import homestyles from "./components/Home/homestyles";
import { recipes } from "../../client/src/data/dataArrays";
import Header from "./components/header";
import MenuImage from "../../client/src/components/MenuImage/MenuImage";
import { getCategoryName } from "../../../RocketDeliveryBackend/client/src/data/MockDataAPI";
import styles from "../styles";

export default function Restaurants(props) {
  const { navigation } = props;

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerLeft: () => (
  //         <MenuImage
  //           onPress={() => {
  //             navigation.openDrawer();
  //           }}
  //         />
  //       ),
  //       headerRight: () => <View />,
  //     });
  //   }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={homestyles.photo} source={{ uri: item.photo_url }} />
        <Text style={homestyles.title}>{item.title}</Text>
        <Text style={homestyles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <>
      <View style={styles.container}>
      <Header />
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    </>
  );
}
