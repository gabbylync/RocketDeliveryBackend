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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons/faSortDown";
import ForwardButton from "../ForwardButton/Forwardbutton";

export default function Restaurants({ route, navigation }) {
  const { customer_id, user_id, courier_id } = route.params;
  const [restaurants, setRestaurants] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedRating, setSelectedRating] = useState(-1);
  const [selectedPrice, setSelectedPrice] = useState(-1);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/restaurants");
        const json = await response.json();
        if (response && response.status === 200) {
          setRestaurants(json);
          console.log("fetchRestaurants: ", json);
          const ratingsArr = json.map((item) => {
            return { rating: item.ave_rating };
          });
          setRatings(flterDuplicateRatings(ratingsArr));
          const pricesArr = json.map((item) => {
            return { price: item.restaurant.price_range };
          });
          setPrices(flterDuplicatePrices(pricesArr));
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRestaurants();
  }, []);

  const flterDuplicateRatings = (arr) => {
    return arr.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.rating === value.rating)
    );
  };

  const flterDuplicatePrices = (arr) => {
    return arr.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.price === value.price)
    );
  };

  const getDisplayRestaurants = () => {
    let display = filterRestaurantsByRating(restaurants);
    console.log("filter: ", display);
    display = filterRestaurantsByPrice(display);
    console.log("display: ", display);
    return display;
  };

  const filterRestaurantsByRating = (arr) => {
    console.log("rating: ", selectedRating);
    if (selectedRating < 0) {
      return arr;
    } else {
      return arr.filter((item) => {
        if (item.ave_rating === selectedRating.rating) {
          return item;
        }
      });
    }
  };

  const filterRestaurantsByPrice = (arr) => {
    console.log("price: ", selectedPrice);
    if (selectedPrice < 0) {
      return arr;
    } else {
      return arr.filter((item) => {
        if (item.restaurant.price_range === selectedPrice.price) {
          return item;
        }
      });
    }
  };

  // let myphotos = [
  //   "/cuisine_1.jpg",
  //   "/cuisine_2.jpg",
  //   "/cuisine_3.jpg",
  //   "/cuisine_4.jpg",
  //   "/cuisine_5.jpg",
  //   "/cuisine_6.jpg",
  // ];
  // function photos(arr) {
  //   const randomPhoto = Math.floor(Math.random() * arr.length);
  //   const photo = arr[randomPhoto];

  //   return photo;
  // }

    const random = () => {
      const i = Math.floor(Math.random() * 6) + 1
      console.log('HOWDY', `../../../assets/cuisine_${random()}.jpg`)
      return i
  }

  const renderRestaurants = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        // onPress={() => navigation.navigate("Order")}
        onPress={() =>
          navigation.navigate("Order", {
            item,
            customer_id,
            user_id,
            courier_id,
          })
        }
      >
        <View style={styles.container}>
          {/* <Image source={require(`../../assets/cuisine_${random()}.jpg`)}  /> */}
          <Image  style={homestyles.photo} source={require(`../../../assets/cuisine_1.jpg`)}  />

          {/* <Image style={homestyles.photo} src={photos(myphotos)} /> */}
          <br />
          <Text style={homestyles.title}>{item.restaurant.name}</Text>
          <Text style={homestyles.category}>{item.ave_rating} stars</Text>
          <br />
        </View>
      </TouchableHighlight>
    );
  };

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
          data={ratings}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            // citiesDropdownRef.current.reset();
            // setCities([]);
            // setCities(selectedItem.cities);
            setSelectedRating(selectedItem);
          }}
          defaultButtonText={"Rating"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.rating;
          }}
          rowTextForSelection={(item, index) => {
            return item.rating;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return <FontAwesomeIcon icon={faSortDown} color={"#FFFFFF"} />;
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        <View style={styles.divider} />
        <SelectDropdown
          data={prices}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedPrice(selectedItem);
          }}
          defaultButtonText={"Price"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.price;
          }}
          rowTextForSelection={(item, index) => {
            return item.price;
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return <FontAwesomeIcon icon={faSortDown} color={"#FFFFFF"} />;
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
          data={getDisplayRestaurants()}
          renderItem={renderRestaurants}
          keyExtractor={(item) => `${item.restaurant.id}`}
        />
      </View>
      <Footer navigation={navigation}/>
    </>
  );
}
