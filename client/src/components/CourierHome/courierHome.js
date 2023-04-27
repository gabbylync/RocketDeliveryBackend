import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import styles from "../../../styles";
import courierstyles from "./courierStyles";
import ForwardButton from "../ForwardButton/Forwardbutton";
import { Table, Row, Rows } from "react-native-table-component";
import historystyles from "../OrderHistory/historyStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus";

const tableData = {
  tableHead: ["ORDER ID", "ADDRESS", "STATUS", "VIEW"],
};
export default function Courier({ route, navigation }) {
  const [data, setData] = useState(tableData);

  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedCourierID, setSelectedCourierID] = useState(null);
  const [selectedproduct, setSelectedproduct] = useState(null);

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
      <Text style={courierstyles.modalText3}> {item.product_name} </Text>
      <Text style={courierstyles.quantityText}> x1 </Text>
      <Text style={courierstyles.priceText}> $ price </Text>
    </>
  );

  const renderItem = ({ item }) => (
    <>
      <View>
        <Text style={courierstyles.nameText}>
          {" "}
          {"   "} {item.restaurant_name}{" "}
        </Text>
        <br />
        <br />
        <Text style={courierstyles.statusText}> {item.status} </Text>
      </View>
      <View>
        <Pressable
          style={courierstyles.iconbutton}
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
    <View style={courierstyles.container}>
      <br />
      <br />
      <Text style={courierstyles.headertext}> MY DELIVERIES </Text>
      <br />
      <Row
        data={data.tableHead}
        style={courierstyles.head}
        textStyle={courierstyles.headText}
      />

      <FlatList
        style={courierstyles.orderhistroyList}
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
                style={courierstyles.buttonClosed}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSelectedItem(null);
                  setSelectedStatus(null);
                  setSelectedCourierID(null);
                  setSelectedproduct(null);
                  // add setSelected_ to null  for when we close out it resets value
                }}
              >
                <Text style={courierstyles.xButton}>x</Text>
              </Pressable>
              <Text style={courierstyles.modalText}> </Text>
              <Text style={courierstyles.modalText}>
                {" "}
                Name: {selectedItem}{" "}
              </Text>
              <Text style={courierstyles.modalText2}>
                Order Date: 2/14/2023
              </Text>
              <Text style={courierstyles.modalText2}>
                {" "}
                Status: {selectedStatus}
              </Text>
              <Text style={courierstyles.modalText2}>
                {" "}
                Courier ID: {selectedCourierID}
              </Text>
              <Text style={courierstyles.modalText}> </Text>
              <br />
              {/* <Text style={historystyles.modalText3}>
          {" "}
          {selectedproduct}{" "}
        </Text> */}

              <FlatList
                style={courierstyles.orderhistroyList}
                data={orders.products}
                renderItem={productItem}
                keyExtractor={(item) => item.products.product_id}
              />

              {/* <Text style={historystyles.quantityText}> x1 </Text>
        <Text style={historystyles.priceText}> $ price </Text> */}
              <br />
              <View style={courierstyles.line} />
              <br />
              <Text style={courierstyles.totalText}>TOTAL: $ Total </Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
    <Footer navigation={navigation} />
    </>
  );
}
