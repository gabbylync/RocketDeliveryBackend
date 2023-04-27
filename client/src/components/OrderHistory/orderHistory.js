import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import historystyles from "./historyStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus";
import styles from "../../../styles";
import Footer from "../footer";
import BackButton from "../BackButton/BackButton";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const tableData = {
  tableHead: ["ORDER", "STATUS", "VIEW"],
};

const OrderHistory = () => {
  const [data, setData] = useState(tableData);
  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedCourierID, setSelectedCourierID] = useState(null);
  const [selectedproduct, setSelectedproduct] = useState(null);
  // console.log(selectedproduct);

  // To set the value on Text
  const [getUserID, setGetuserID] = useState("");

  const getcurrentCustomerId = async () => {
    try {
      const custID = await AsyncStorage.getItem("@userid");
      return custID;
    } catch (error) {
      console.log(error);
    }
  };

  ////////// GET orders //////////////////////////////////

  useEffect(() => {
    async function fetchOrders() {
      const customerId = await getcurrentCustomerId();

      const response = await fetch(
        `http://localhost:3000/api/orders?type=customer&id=${customerId}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const data = await response.json();
      if (!data) {
        window.alert(`Order with id ${id} and type ${type} not found`);
      }
      console.log(data);
      console.log("orders.restaurant_name", data[0].restaurant_name);
      console.log("total cost:", data[0].total_cost);
      console.log("products:", data[0].products[0].product_name);

      setOrders(data);
      // console.log(orders);
    }

    fetchOrders();
  }, []);
  // console.log("orders:" , orders)

  const productItem = ({ item }) => (
    <>
      <Text style={historystyles.modalText3}>
                  {" "} 
                  {item.product_name}{" "}
                </Text>
    <Text style={historystyles.quantityText}> x1 </Text>
    <Text style={historystyles.priceText}> $ price </Text>
    </>
  );

  const renderItem = ({ item }) => (
    <>
      <View>
        <Text style={historystyles.nameText}>
          {" "}
          {"   "} {item.restaurant_name}{" "}
        </Text>
        <br />
        <br />
        <Text style={historystyles.statusText}> {item.status} </Text>
      </View>
      <View>
        <Pressable
          style={historystyles.iconbutton}
          onPress={() => {
            setModalVisible(true);
            setSelectedItem(item.restaurant_name);
            setSelectedStatus(item.status);
            setSelectedCourierID(item.courier_id);
            setSelectedproduct(item.products.product_name);
            // setSelected_ (item.something)
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </Pressable>
      </View>
    </>
  );

  return (
    <>
      <View style={historystyles.container}>
        <Text style={historystyles.myOrders}> MY ORDERS </Text>
        <br />
        <Row
          data={data.tableHead}
          style={historystyles.head}
          textStyle={historystyles.headText}
        />
        <br />

        <FlatList
          style={historystyles.orderhistroyList}
          data={orders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={styles.centeredView}>
          <Modal
            // animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centered}>
              <View style={styles.modalView}>
                <Pressable
                  style={historystyles.buttonClosed}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setSelectedItem(null);
                    setSelectedStatus(null);
                    setSelectedCourierID(null);
                    setSelectedproduct(null);
                    // add setSelected_ to null  for when we close out it resets value
                  }}
                >
                  <Text style={historystyles.xButton}>x</Text>
                </Pressable>
                <Text style={historystyles.modalText}> </Text>
                <Text style={historystyles.modalText}>
                  {" "}
                  Name: {selectedItem}{" "}
                </Text>
                <Text style={historystyles.modalText2}>
                  Order Date: 2/14/2023
                </Text>
                <Text style={historystyles.modalText2}>
                  {" "}
                  Status: {selectedStatus}
                </Text>
                <Text style={historystyles.modalText2}>
                  {" "}
                  Courier ID: {selectedCourierID}
                </Text>
                <Text style={historystyles.modalText}> </Text>
                <br />
                {/* <Text style={historystyles.modalText3}>
                  {" "}
                  {selectedproduct}{" "}
                </Text> */}

                <FlatList
                  style={historystyles.orderhistroyList}
                  data={orders.products}
                  renderItem={productItem}
                  keyExtractor={(item) => item.products.product_id}
                />

                {/* <Text style={historystyles.quantityText}> x1 </Text>
                <Text style={historystyles.priceText}> $ price </Text> */}
                <br />
                <View style={historystyles.line} />
                <br />
                <Text style={historystyles.totalText}>TOTAL: $ Total </Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>

      <Footer navigation={navigation} />
    </>
  );
};

export default OrderHistory;
