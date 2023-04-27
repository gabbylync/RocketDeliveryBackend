import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TextInput, Pressable, ScrollView } from "react-native";
import styles from "../../../styles";
import courierstyles from "./courierStyles";
import Footer from "../footer";


export default function CourierAccount({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <>
    <ScrollView>
    <View style={courierstyles.container}>
      <br />
      <br />
      <Text style={courierstyles.headertext}> MY ACCOUNT </Text>
      <br />
      <Text style={courierstyles.loggedIn}> Logged In As: Courier</Text>
      <br />
      <br />
      <Text style={courierstyles.email}> Primary Email (Read Only) </Text>
      <br />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"@Email used to login to app here"}
        style={courierstyles.input}
      />

      <Text style={courierstyles.emailText}>
        {" "}
        Email used to login to the application
      </Text>
      <br />
      <br />
      <Text style={courierstyles.email}> Courier Email: </Text>
      <br />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"@Email used for courier account here"}
        style={courierstyles.input}
      />
      <Text style={courierstyles.emailText}>
        {" "}
        Email used for your Courier account
      </Text>
      <br/>
      <br/>
      <Text style={courierstyles.email}> Courier Phone: </Text>
      <br />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder={"phone number of courier 813-234-0493"}
        style={courierstyles.input}
      />
        <Text style={courierstyles.emailText}>
        {" "}
       Phone number for your Courier account
      </Text>
      <br/>
      <br/>
      <br/>
      <Pressable
            style={courierstyles.updateButton}
            onPress={() => SOMETHING}
          >
            <Text style={courierstyles.textStyle}>UPDATE ACCOUNT</Text>
          </Pressable>

    </View>
    </ScrollView>
    <Footer navigation={navigation}/>
    </>
  );
}
