import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Pressable } from "react-native";
import styles from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons/faBurger";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";

export default function Footer({ navigation }) {
  return (
    <View style={styles.containerFooter}>
      <View style={styles.footer}>
        {/* <View style={styles.iconContent}> */}
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
        {/* </View> */}
        {/* <View style={styles.iconContent2}> */}
        <Pressable
          onPress={() => {
            navigation.navigate("History");
          }}
        >
          <FontAwesomeIcon style={styles.clockIcon} icon={faClockRotateLeft} />
          <Text style={styles.footerText2}> Order History</Text>
        </Pressable>
        {/* </View> */}
      </View>
    </View>
  );
}
