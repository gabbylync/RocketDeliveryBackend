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

const OrderHistory = ({ navigation }) => {
  const [data, setData] = useState(tableData);
  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null)

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedCourierID, setSelectedCourierID] = useState(null);

  // console.log(selectedproduct);


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
    <Text style={historystyles.quantityText}> x {item.product_quantity} </Text>
    <Text style={historystyles.priceText}> $ {item.unit_cost} </Text>
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
            setSelectedOrder(item)
            // setSelectedItem(item.restaurant_name);
            // setSelectedStatus(item.status);
            // setSelectedCourierID(item.courier_id);
            // setSelectedproduct(item.products.product_name);
           
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
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
              setSelectedOrder(null)
            }}
          >
            <View style={styles.centered}>
              <View style={styles.modalView}>
                <Pressable
                  style={historystyles.buttonClosed}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                   
                    setSelectedOrder(null)
                    // add setSelected_ to null  for when we close out it resets value
                  }}
                >
                  <Text style={historystyles.xButton}>x</Text>
                </Pressable>
                <Text style={historystyles.modalText}> </Text>
                <Text style={historystyles.modalText}>
                  {" "}
                  Name:  {selectedOrder && selectedOrder.customer_name}{" "}
                </Text>
                <Text style={historystyles.modalText2}>
                  Order Date: 2/14/2023
                </Text>
                <Text style={historystyles.modalText2}>
                  {" "}
                  Status: {selectedOrder && selectedOrder.status}
                </Text>
                <Text style={historystyles.modalText2}>
                  {" "}
                  {selectedOrder && selectedOrder.courier_id && 'Courier ID:'} {selectedOrder && selectedOrder.courier_id}
                </Text>
                <Text style={historystyles.modalText}> </Text>
                <br />
                {/* <Text style={historystyles.modalText3}>
                  {" "}
                  {selectedproduct}{" "}
                </Text> */}

                <FlatList
                  style={historystyles.orderhistroyList}
                  data={selectedOrder && selectedOrder.products}
                  renderItem={productItem}
                  keyExtractor={(item) => item.product_id}
                />

                {/* <Text style={historystyles.quantityText}> x1 </Text>
                <Text style={historystyles.priceText}> $ price </Text> */}
                <br />
                <View style={historystyles.line} />
                <br />
                <Text style={historystyles.totalText}>TOTAL: $ {selectedOrder && selectedOrder.total_cost} </Text>
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
