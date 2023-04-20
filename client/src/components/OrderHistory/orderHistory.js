import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import historystyles from "./historyStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlassPlus";
import styles from "../../../styles";
import Footer from "../footer";
import BackButton from "../BackButton/BackButton";

const tableData = {
  tableHead: ["ORDER", "STATUS", "VIEW"],
  tableData: [
    ["Bitcoin", "PENDING", ""],
    ["Ethereum", "PENDING", ""],
    ["Tether", "PENDING", ""],
    ["BNB", "PENDING", ""],
    ["USD Coin", "PENDING", ""],
  ],
};
const OrderHistory = () => {
  const [data, setData] = useState(tableData);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={historystyles.container}>
        <br />
        <Text style={historystyles.myOrders}> MY ORDERS </Text>
        <br />
        <br />
        <Table>
          <Row
            data={data.tableHead}
            style={historystyles.head}
            textStyle={historystyles.headText}
          />

          <Rows data={data.tableData} textStyle={historystyles.text} />
          {/*///// start of create order MODAL HERE ////////*/}
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
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
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={historystyles.xButton}>x</Text>
                  </Pressable>
                  <Text style={historystyles.modalText}> Restaurant Name </Text>
                  <Text style={historystyles.modalText2}>Order Date</Text>
                  <Text style={historystyles.modalText2}> Status: </Text>
                  <Text style={historystyles.modalText2}> Courier ID: </Text>
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
        </Table>
      </View>
 
      
      <Footer />
    </>
  );
};

export default OrderHistory;
