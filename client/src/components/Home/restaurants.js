import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";
import homestyles from "./homestyles";
import { recipes } from "../../data/dataArrays";
import Header from "../header";
import Footer from "../footer";
import MenuImage from "../MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import styles from "../../../styles";
import SelectDropdown from "react-native-select-dropdown";
// import FontAwesome, {
//   SolidIcons,
//   RegularIcons,
//   BrandIcons,
// } from "react-native-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons/faSortDown";
import ForwardButton from "../ForwardButton/Forwardbutton";

export default function Restaurants(props) {
  const { navigation } = props;

  //// this section for the the dropdown //////
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const citiesDropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        { title: "Egypt", cities: [{ title: "Cairo" }, { title: "Alex" }] },
        {
          title: "Canada",
          cities: [{ title: "Toronto" }, { title: "Quebec City" }],
        },
      ]);
    }, 1000);
  }, []);
  ////// dropdown section ends /////////

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
        <br/>
        <Text style={homestyles.title}>{item.title}</Text>
      
        <Text style={homestyles.category}>
          {getCategoryName(item.categoryId)}
        </Text>
        <br/>
      </View>
    </TouchableHighlight>
  );

  return (
    <>
      <ForwardButton
        onPress={() => {
          navigation.navigate("Order");
        }}
      />
      <br />
      <Text style={styles.nearby}> NEARBY RESTAURANTS</Text>
      <br />
      <View style={styles.dropdownsRow}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            citiesDropdownRef.current.reset();
            setCities([]);
            setCities(selectedItem.cities);
          }}
          defaultButtonText={"Rating"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.title;
          }}
          rowTextForSelection={(item, index) => {
            return item.title;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesomeIcon 
              icon={faSortDown} 
              color= {'#FFFFFF'}/>
              
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        <View style={styles.divider} />
        <SelectDropdown
          ref={citiesDropdownRef}
          data={cities}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Price"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.title;
          }}
          rowTextForSelection={(item, index) => {
            return item.title;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesomeIcon 
              icon={faSortDown}
              color= {'#FFFFFF'} />
             
              
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown2DropdownStyle}
        />
      </View>
      <br />
      <View style={styles.container}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
      <Footer />
    </>
  );
}
