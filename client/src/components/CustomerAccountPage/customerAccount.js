import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TextInput, Pressable, ScrollView } from "react-native";
import styles from "../../../styles";
import customerstyles from "./customerStyles";
import Footer from "../footer";


export default function CustomerAccount({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <>
    <ScrollView>
    <View style={customerstyles.container}>
      <br />
      <br />
      <Text style={customerstyles.headertext}> MY ACCOUNT </Text>
      <br />
      <Text style={customerstyles.loggedIn}> Logged In As: Customer</Text>
      <br />
      <br />
      <Text style={customerstyles.email}> Primary Email (Read Only) </Text>
      <br />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"@Email used to login to app here"}
        style={customerstyles.input}
      />

      <Text style={customerstyles.emailText}>
        {" "}
        Email used to login to the application
      </Text>
      <br />
      <br />
      <Text style={customerstyles.email}> Customer Email: </Text>
      <br />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"@Email used for customer account here"}
        style={customerstyles.input}
      />
      <Text style={customerstyles.emailText}>
        {" "}
        Email used for your Customer account
      </Text>
      <br/>
      <br/>
      <Text style={customerstyles.email}> Customer Phone: </Text>
      <br />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"phone number of customer 813-234-0493"}
        style={customerstyles.input}
      />
        <Text style={customerstyles.emailText}>
        {" "}
       Phone number for your Customer account
      </Text>
      <br/>
      <br/>
      <br/>
      <Pressable
            style={customerstyles.updateButton}
            onPress={() => SOMETHING}
          >
            <Text style={customerstyles.textStyle}>UPDATE ACCOUNT</Text>
          </Pressable>

    </View>
    </ScrollView>
    <Footer navigation={navigation}/>
    </>
  );
}
