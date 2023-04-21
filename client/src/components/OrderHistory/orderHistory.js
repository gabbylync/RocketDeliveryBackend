import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Modal, Pressable } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import historystyles from "./historyStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus";
import styles from "../../../styles";
import Footer from "../footer";
import BackButton from "../BackButton/BackButton";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const tableData = {
  tableHead: ["ORDER", "STATUS", "VIEW"],
  tableData: [
    ["Name of Restaurant", "PENDING", ""],
    ["NOR", "PENDING", ""],
    ["NOR", "PENDING", ""],
    ["NOR", "PENDING", ""],
    ["NOR", "PENDING", ""],
  ],
};

const OrderHistory = () => {
  const [data, setData] = useState(tableData);
  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  // selectedItem = ID
  const [selectedItem, setSelectedItem] = useState(null);

  // 3 more states, one for status, etc

   // To set the value on Text
   const [getUserID, setGetuserID] = useState('');

  // const getValueFunction = () => {
  //   // Function to get the value from AsyncStorage
  //   AsyncStorage.getItem('@userid').then(
  //     (user_id) =>
  //       // AsyncStorage returns a promise
  //       // Adding a callback to get the value
  //       setGetuserID(user_id),
  //     // Setting the value in Text
  //   );
  // };

  const getcurrentCustomerId = async () => {
    try {
      const custID = await AsyncStorage.getItem('@userid')
      return custID
    } catch (error) {
      console.log(error)
    }
  }

  // getValueFunction()

  ////////// GET orders //////////////////////////////////


  useEffect(() => {
    async function fetchOrders() {
      const customerId = await getcurrentCustomerId()

      const response = await fetch(`http://localhost:3000/api/orders?type=customer&id=${customerId}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      // const order = await response.json();
      const data = await response.json();
      if (!data) {
        window.alert(`Order with id ${id} and type ${type} not found`);
      }


      // const response = await fetch(`http://localhost:3000/api/orders?type=customer&id=${customerId}`);
      // const jsonData = await response.json();
      console.log(data);
      console.log('orders.restaurant_name', data[0].restaurant_name);

      setOrders(data);
      // console.log(orders);
    }

    fetchOrders();
  }, []);
// console.log("orders:" , orders)

const renderItem = ({ item }) => (
  <>
    <View>
      <Text>
        Name: {item.customer_name} {item.restaurant_name}{" "}
      </Text>
    </View>
    <View>

      <Pressable
        style={historystyles.iconbutton}
        onPress={() => { setModalVisible(true) 
          setSelectedItem(item.id);
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
        <br />
        <Text style={historystyles.myOrders}> MY ORDERS </Text>
        <FlatList
                    // style={styles.usersList}
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />

         <br />
        <br />
        
          {/* <Row
            data={data.tableHead}
            style={historystyles.head}
            textStyle={historystyles.headText}
          />

          <Rows data={data.tableData} textStyle={historystyles.text} /> */}
          
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
                    onPress={() => {setModalVisible(!modalVisible)
                      setSelectedItem(null);
                      // add setSelected_ to null  for when we close out it resets value
                    }}
                  >
                    <Text style={historystyles.xButton}>x</Text>
                  </Pressable>
                  <Text style={historystyles.modalText}> </Text>
                  <Text style={historystyles.modalText}> Name: {selectedItem} </Text>
                  <Text style={historystyles.modalText2}>Order Date</Text>
                  <Text style={historystyles.modalText2}> Status: </Text>
                  <Text style={historystyles.modalText2}> Courier ID: </Text>
                  <Text style={historystyles.modalText}> </Text>
                  <br />
                  <Text style={historystyles.modalText3}>
                    {" "}
                    Text with order items here{" "}
                  </Text>
                  <Text style={historystyles.quantityText}> x1 </Text>
                  <Text style={historystyles.priceText}> $ price </Text>
                  <br />
                  <View style={historystyles.line} />
                  <br />
                  <Text style={historystyles.totalText}>TOTAL: $ Total </Text>
                </View>
              </View>
            </Modal>
            <Pressable
              style={historystyles.iconbutton}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
            </Pressable>
          </View>
        
      </View>

      <Footer />
    </>
  );
};

export default OrderHistory;
