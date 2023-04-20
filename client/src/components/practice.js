
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import historystyles from "../../components/OrderHistory/historyStyles";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class OrderHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Head', 'Head2', 'Head3'],
          tableData: [
            ['1', '2', ''],
            ['a', 'b', ''],
            ['1', '2', ''],
            ['a', 'b', '']
          ]
        }
      }
    
      _alertIndex(index) {
        Alert.alert(`This is row ${index + 1}`);
      }
    
      render() {
        const state = this.state;
        const element = (data, index) => (
          <TouchableOpacity onPress={() => this._alertIndex(index)}>
            <View style={historystyles.btn}>
              <Text style={historystyles.btnText}>button</Text>
            </View>
          </TouchableOpacity>
        );
    
        return (

          <View style={historystyles.container}>
            <Text  style={historystyles.orderText}> MY ORDERS</Text>
            <br/>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row data={state.tableHead} style={historystyles.head} textStyle={historystyles.text}/>
              {
                state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={historystyles.row}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={historystyles.text}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
          </View>
        )
      }
    }
