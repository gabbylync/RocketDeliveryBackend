import React, { useLayoutEffect, useState, useEffect } from "react";
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
import ForwardButton from "../ForwardButton/Forwardbutton";
import historystyles from "../OrderHistory/historyStyles";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage"
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

export default function Order({ route, navigation }) {
  const { item } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products?restaurant=${item.restaurant.id}`
        );
        const json = await response.json();
        if (response && response.status === 200) {
          const updated = json.map((item) => {
            item.count = 0;
            return item;
          });
          console.log("fetchProducts: ", updated);
          setProducts(updated);
        } else {
          console.error(response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };

  const handleIncrement = (product_id) => {
    console.log("handleIncrement: ", product_id);
    const updated = products.map((product) => {
      if (product.id === product_id) {
        product.count += 1;
        console.log("count: ", product.count);
      }
      return product;
    });
    setProducts(updated);
  };

  const handleDecrement = (product_id) => {
    console.log("handleDecrement: ", product_id);
    const updated = products.map((product) => {
      if (product.id === product_id && product.count > 0) {
        console.log("count: ", product.count);
        product.count -= 1;
      }
      return product;
    });
    setProducts(updated);
  };

  const calculateOrderTotal = () => {
    let total = 0;
    products.forEach((product) => {
      if (product.count > 0) {
        const subTotal = product.count * product.cost;
        total += subTotal;
      }
    });
    if (total > 0) {
      setOrderTotal(total);
      setModalVisible(true);
    }
  };

  const postOrder = async () => {
    try {
      console.log(
        "retaurant: ",
        item.restaurant.id,
        ", customer: ",
        customer_id
      );
      const productsOrder = [];
      products.forEach((product) => {
        if (product.count > 0) {
          console.log("quantity: ", product.count);
          productsOrder.push({
            id: product.id,
            quantity: product.count,
          });
        }
      });

      console.log("productsOrder: ", productsOrder);
      const customer_id = await AsyncStorage.getItem("@customer")
      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          Accept: "application/json", 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: item.restaurant.id,
          customer_id: customer_id,
          products: productsOrder,
        }),
      });
      if (response && response.status === 201) {
        const json = await response.json();
        console.log("postOrder: ", json);
        reset()
      } else {
        // showErrorToast()
        console.log("response: ", response.status);
      }
    } catch (error) {
     
      // setInterval(() => {
      //   setModalVisible(!modalVisible)
      // }, 5000);
      console.error(error);
    }
    showToast()
    setInterval(() => {
      setModalVisible(!modalVisible)
    }, 5000);
   
  };

  const reset = () => {
    setOrderTotal(0);
    products.forEach((product) => {
      product.count = 0;
    });
  };

  const renderOrderSummary = ({ item }) => {
    if (item.count > 0) {
      return (
        <>
        <Text styles={orderstyles.modalProducts}>
          {item.name} </Text>
         <Text style={orderstyles.quantityText}>  X   {item.count}</Text>     
         <Text style={orderstyles.priceText}> ${item.cost}</Text>
     </>
      );
    }
  };

  const getCount = (product_id) => {
    console.log("getCount: ", product_id);
    let result = 0;
    products.forEach((product) => {
      if (product.id === product_id) {
        console.log("return count: ", product.count);
        result = product.count;
      }
    });
    return result;
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}
    >
      <View style={orderstyles.categoriesItemContainer}>
        <Image
          style={orderstyles.categoriesPhoto}
          source={{ uri: getSource(item) }}
        />
        {/* <View style={{ flex: 0.5 }}> */}
        <View>
          <Text style={orderstyles.productText}>{item.name}</Text>
          <Text style={orderstyles.costText}> $ {item.cost}</Text>
        </View>
        <View style={orderstyles.buttonsContainer}>
          <Button
            title="-"
            color="#222126"
            onPress={() => {
              handleDecrement(item.id);
            }}
          />

          <Text style={orderstyles.countnumber}>{getCount(item.id)}        </Text>

          <Button
            title="+"
            color="#222126"
            onPress={() => {
              handleIncrement(item.id);
            }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
  const getSource = (item) => {
    if (item.description == null) {
      return "https://i.ibb.co/YDXzP4r/Restaurant-Menu-1.png";
    }
    return item.description;
  };
  const radio_props = [
    { label: "param1", value: 0 },
    { label: "param2", value: 1 },
  ];

  const [chosenOption, setChosenOption] = useState("apple"); //will store our current user options
  const options = [
    { label: "By Email   ", value: "apple" },
  
    { label: "By Phone", value: "samsung" },
  ]; //create our options for radio group

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Thank You!',
      text2: 'Your order has been received.✅ ',
      text1Style: {
        fontSize: 55,
        fontWeight: '400'
      } ,
      text2Style: {
        fontSize: 35,
        fontWeight: '400'
      } ,
      position: 'top',
      // bottomOffset: 20,
      visibilityTime: 6000,
      autoHide: true
    });
  };

  const showErrorToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Your order was not processed successfully.',
      text2: 'Please Try Again.❌ ',
      text1Style: {
        fontSize: 55,
        fontWeight: '400'
      } ,
      text2Style: {
        fontSize: 35,
        fontWeight: '400'
      } ,
      position: 'top',
      // bottomOffset: 20,
      visibilityTime: 6000,
      autoHide: true
    });
  }

  return (
    <>
     

      <Text style={styles.nearby}> RESTAURANT MENU</Text>
      <br />

      <Text style={orderstyles.restaurantName}> {item.restaurant.name}</Text>
      <Text style={orderstyles.menuitemz}>
        {" "}
        Price (1-3): {item.restaurant.price_range}{" "}
      </Text>
      <Text style={orderstyles.menuitemz}>
        {" "}
        Rating (1-4) : {item.ave_rating}{" "}
      </Text>
      <View>
        {/*///// start of create order MODAL HERE ////////*/}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              showErrorToast()
              // Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centered}>
              <View style={styles.modalView}>
                <Pressable
                  style={orderstyles.buttonClosed}
                  onPressIn={() => showErrorToast()}
                
                  onPress={() => setInterval(() => {setModalVisible(!modalVisible)}, 5000)}
                >
     
                  <Text style={orderstyles.xButton}>x</Text>
                </Pressable>
                <Text style={orderstyles.modalText}>{""} </Text>
                <Text style={orderstyles.modalText}>Order Confirmation</Text>
                <Text style={orderstyles.modalText}> {""} </Text>
                <br />
                <Text style={orderstyles.modalText2}>Order Summary</Text>
                <br />
                <FlatList
                  data={products}
                  renderItem={renderOrderSummary}
                  keyExtractor={(item) => `${item.id}`}
                />
                <br />
                <View style={orderstyles.line} />
                <br />
                <Text style={orderstyles.modalText3}>
                  {" "}
                  TOTAL: ${orderTotal}
                </Text>
                <br />
                <View style={orderstyles.line2} />
                <br />
                <Text style={orderstyles.confirmText}>
                  {" "}
                  Would you like to receive your order confirmation by email
                  and/ or text?
                </Text>
                <br />
                <View>
                  {/* <Text> {chosenOption}</Text> */}
                  <RadioForm
                    style={orderstyles.radiobuttons}
                    radio_props={options}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#DA583B'}
                    buttonInnerColor={'#DA583B'}
                    buttonSize={20}
                    initial={0} //initial value of this group
                    onPress={(value) => {
                      setChosenOption(value);
                    }} //if the user changes options, set the new value
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text> </Text>

                  <Pressable
                    style={styles.buttonClose}
                    onPress={() => postOrder()}
            
                  >
                    <Text style={styles.textStyle2}>Confirm</Text>

                    {/* <Toast position="bottom" bottomOffset={20} /> */}
                  </Pressable>
                  {/* <Toast position="bottom" bottomOffset={20} /> */}
                  <br />
                  <br />
                  <br />
                </View>
              </View>
            </View>
             <Toast position="bottom" bottomOffset={20} />
          </Modal>
          <Pressable
            style={styles.button}
            onPress={() => calculateOrderTotal()}
          >
            <Text style={styles.textStyle}>Create Order</Text>
          </Pressable>
        </View>
        {/*  //// END OF MODAL ////////// */}
        <View>
          <FlatList
            data={products}
            renderItem={renderCategory}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </View>
      <Footer navigation={navigation} />
    </>
  );
}
