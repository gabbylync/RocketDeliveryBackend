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
  const [selectedOrder, setSelectedOrder] = useState(null);

  const getcurrentCustomerId = async () => {
    try {
      const custID = await AsyncStorage.getItem("@customer");
      return custID;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchOrders() {
      try {
        const courier_id = await AsyncStorage.getItem("@courier");
        console.log("courier_id: ", courier_id);
        const response = await fetch(
          `http://localhost:3000/api/orders?type=courier&user_id=${courier_id}`
        );
        if (response.ok) {
          const json = await response.json();
          if (json) {
            console.log(json);
            setOrders(json);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchOrders();
  }, [orders.length]);

  const productItem = ({ item }) => (
    <>
      <Text style={historystyles.modalText3}> {item.product_name} </Text>
      <Text style={historystyles.quantityText}>
        {" "}
        x {item.product_quantity}{" "}
      </Text>
      <Text style={historystyles.priceText}> $ {item.unit_cost} </Text>
    </>
  );

  const updateStatus = (item) => {
    if (item.status !== "delivered") {
      if (item.status === "pending") {
        postStatusUpdate(item.id, "in progress");
      } else {
        postStatusUpdate(item.id, "delivered");
      }
      setOrders([]);
    }
  };
  const postStatusUpdate = async (id, status) => {
    try {
      console.log("id: ", id, " status: ", status);
      const response = await fetch(
        `http://localhost:3000/api/order/${id}/status`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: status,
          }),
        }
      );
      if (response && response.status === 200) {
        const json = await response.json();
        console.log("postStatusUpdate: ", json);
      } else {
        console.log("response: ", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <>
      <View>
        <Text style={courierstyles.nameText}>
          {" "}
          {"   "} {item.id}{" "}
        </Text>

        <Text style={courierstyles.addressText}> {item.customer_address} </Text>
<br/>
        {item.status === "pending" && (
          <Pressable
            onPress={() => {
              updateStatus(item);
            }}
          >
            <Text style={courierstyles.statusPendingText}> {item.status} </Text>
          </Pressable>
        )}
        {item.status === "in progress" && (
          <Pressable
            onPress={() => {
              updateStatus(item);
            }}
          >
            <Text style={courierstyles.statusInProgressText}>
              {" "}
              {item.status}{" "}
            </Text>
          </Pressable>
        )}
        {item.status === "delivered" && (
          <Pressable
            onPress={() => {
              updateStatus(item);
            }}
          >
            <Text style={courierstyles.statusDeliveredText}>
              {" "}
              {item.status}{" "}
            </Text>
          </Pressable>
        )}
        <Pressable
          style={courierstyles.iconbutton}
          onPress={() => {
            setModalVisible(true);
            setSelectedOrder(item);
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
        <Text style={courierstyles.myOrders}> MY DELIVERIES </Text>
        <br />
        <Row
          data={data.tableHead}
          style={courierstyles.head}
          textStyle={courierstyles.headText}
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
              // setSelectedOrder(null);
            }}
          >
            <View style={styles.centered}>
              <View style={styles.modalView}>
                <Pressable
                  style={historystyles.buttonClosed}
                  onPress={() => {
                    setModalVisible(!modalVisible);

                    setSelectedOrder(null);
                  }}
                >
                  <Text style={courierstyles.xButton}>x</Text>
                </Pressable>
                <Text style={courierstyles.modalText}> </Text>
                <Text style={courierstyles.modalText}> DELIVERY DETAILS </Text>

                <Text style={courierstyles.modalText2}>
                  {" "}
                  Status: {selectedOrder && selectedOrder.status}
                </Text>

                <Text style={courierstyles.modalText}> </Text>
                <br />
                <Text style={courierstyles.modalText4}>
                  {" "}
                  Delivery Address:{" "}
                </Text>
                <Text style={courierstyles.modalText4}>
                  {" "}
                  Restaurant: {selectedOrder && selectedOrder.restaurant_name}
                </Text>
                <Text style={courierstyles.modalText4}>
                  {" "}
                  Order Date: {selectedOrder && selectedOrder.created_at}
                </Text>
                <br />
                <Text style={courierstyles.modalText5}> Order Details: </Text>
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
                <Text style={historystyles.totalText}>
                  TOTAL: $ {selectedOrder && selectedOrder.total_cost}{" "}
                </Text>
                <br />
              </View>
            </View>
          </Modal>
        </View>
      </View>

      <Footer navigation={navigation} />
    </>
  );
}
