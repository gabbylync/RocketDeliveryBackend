import * as React from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import accountstyles from "./accountStyles";
import styles from "../../../styles";
import ForwardButton from "../ForwardButton/Forwardbutton";

export default function Account({ route, navigation }) {
  return (
    <>
    <ForwardButton
    onPress={() => {
      navigation.navigate("Courier");
    }}
  />
    <View style={accountstyles.container}>
         
      <Image
        style={styles.logo}
        source={require("../../../assets/AppLogoV2.png")}
      />
      <br />
      <br />
      <br />
      <Text style={accountstyles.accountText}> Select Account Type</Text>
      <TouchableOpacity 
      style={accountstyles.customerPhoto} 
      onPress={() => { navigation.navigate("Restaurant")  }}>
      <Image
        style={accountstyles.customer}
        source={require("../../../assets/customer.jpg")}
      />
      </TouchableOpacity>
      <br/>
      <TouchableOpacity 
      style={accountstyles.courierPhoto}
      onPress={() => { navigation.navigate("Courier")  }} >
       <Image
        style={accountstyles.customer}
        source={require("../../../assets/courier.jpg")}
      />
      </TouchableOpacity>
    </View>
    </>
  );
}
