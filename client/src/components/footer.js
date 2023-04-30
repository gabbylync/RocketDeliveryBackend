import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Image, Button, Pressable, TouchableOpacity } from "react-native";
import styles from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons/faBurger";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser"

export default function Footer({ navigation }) {
  const [accountType, setAccountType] = useState("")

  useEffect(() => {
    async function fetchAccountType() {
        try {
            const account_type = await AsyncStorage.getItem("@account")
            setAccountType(account_type)
        } catch (error) {
            console.error(error)
        }
    }
    fetchAccountType()
}, [])


  return (
    <View style={styles.containerFooter}>
      <View style={styles.footer}>
        {/* <View style={styles.iconContent}> */}
        {accountType === 'customer' && (
        <Pressable
          onPress={() => {
            navigation.navigate("Restaurant");
          }}
        >
          <FontAwesomeIcon style={styles.burgerIcon} icon={faBurger} />
          <br />
          <br />
          <Text style={styles.footerText}> Restaurants </Text>
        </Pressable>
          )}
        {/* </View> */}
        {accountType === 'courier' && (
        <Pressable
          onPress={() => {
            navigation.navigate("Courier");
          }}
        >
          <FontAwesomeIcon style={styles.clockIcon} icon={faClockRotateLeft} />
          {/* <Text style={styles.footerText2}> Order History</Text> */}
        </Pressable>
          )}
        <Text style={styles.footerText3}> Order History</Text>

        {accountType === 'customer' && (
        <Pressable
          onPress={() => {
            navigation.navigate("History");
          }}
        >
          <FontAwesomeIcon style={styles.clockIcon} icon={faClockRotateLeft} />
          {/* <Text style={styles.footerText2}> Order History</Text> */}
        </Pressable>
          )}
       
        
        <TouchableOpacity onPress={async () => {
                // const accountType = await AsyncStorage.getItem("@account")
                if (accountType === 'courier') {
                    navigation.navigate('CourierAccount')
                } else {
                    navigation.navigate('CustomerAccount')
                }
            }}>
                <View style={styles.iconContent3}>
                    <FontAwesomeIcon icon={faUser} />
                    {/* <Text style={styles.footerText2}>Account</Text> */}
                </View>
                <Text style={styles.footerText2}>Account</Text>
            </TouchableOpacity>
       
      </View>
    </View>
  );
}
