import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, TextInput, Pressable, ScrollView } from "react-native";
import styles from "../../../styles";
import customerstyles from "./customerStyles";
import Footer from "../footer";
import AsyncStorage from "@react-native-async-storage/async-storage"


export default function CustomerAccount({ navigation }) {
  const [userId, setUserId] = useState(0)
  const [login, setLogin] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    async function fetchOrders() {
        try {
            const user_id = await AsyncStorage.getItem("@user")
            setUserId(user_id)
            console.log('user_id: ', user_id)
            const response = await fetch(`http://localhost:3000/api/account/${user_id}?type=customer`)
            if (response.ok) {
                const json = await response.json()
                if (json) {
                    console.log(json)
                    setLogin(json.login)
                    setEmail(json.email)
                    setPhone(json.phone)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    fetchOrders()
}, [])

const postUpdate = async () => {
  try {
      const response = await fetch(`http://localhost:3000/api/account/${userId}`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              type: 'customer',
              email: email,
              phone: phone,
          }),
      })
      if (response && response.status === 200) {
          const json = await response.json()
          console.log("postOrder: ", json)
      } else {
          console.log("response: ", response.status)
      }
  } catch (error) {
      console.error(error)
  }
}

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
        value={login}
        style={customerstyles.logininput}
        editable={false}
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
        value={phone}
        onChangeText={setPhone}
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
            onPress={() => postUpdate()}
          >
            <Text style={customerstyles.textStyle}>UPDATE ACCOUNT</Text>
          </Pressable>

    </View>
    </ScrollView>
    <Footer navigation={navigation}/>
    </>
  );
}
