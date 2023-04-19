import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,

} from "react-native";
import styles from "../../../styles";
import orderstyles from "./orderstyles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";
import Footer from "../footer";
import BackButton from "../BackButton/BackButton";

export default function Order(props) {

  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props;
  const [count, setCount] = useState(0);

 

  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}
    >
      <View style={orderstyles.categoriesItemContainer}>
        <Image
          style={orderstyles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <Text style={orderstyles.categoriesName}>{item.name}</Text>
        <Text style={orderstyles.categoriesInfo}>
          {getNumberOfRecipes(item.id)} recipes
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <>
    <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      <br />
      <Text style={styles.nearby}> RESTAURANT MENU</Text>
      <br />
      <Text style={orderstyles.restaurantName}> Name of Restaurant Here</Text>
      <Text style={orderstyles.menuitemz}>Price: </Text>
      <Text style={orderstyles.menuitemz}>Rating: </Text>
      <View>

    {/*///// start of create order MODAL HERE ////////*/}
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Order Confirmation</Text>
            <Text style={styles.modalText2}>Order Summary</Text>
            <Text style={styles.modalText3}> TOTAL: </Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle2}>CONFIRM ORDER</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Create Order</Text>
      </Pressable>
    </View>
{/*  //// END OF MODAL ////////// */}
        <View>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => `${item.id}`}
          />
          <TouchableOpacity
            onPress={() => setCount((prevCount) => prevCount - 1)}
            style={orderstyles.fab1}
          >
            <Text style={orderstyles.fabIcon1}> - </Text>
          </TouchableOpacity>
          <p style={orderstyles.count}> {count}</p>
          <TouchableOpacity
            onPress={() => setCount((prevCount) => prevCount + 1)}
            style={orderstyles.fab2}
          >
            <Text style={orderstyles.fabIcon2}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </>
  );
}
