import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Image, Button } from "react-native";
import Login from "./src/components/login";
import styles from "../../../../shootermcgabbin/Codeboxx/RocketDeliveryBackend/client/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "./src/components/Home/restaurants";
import Order from "./src/components/OrdersPage/order";
import OrderHistory from "./src/components/OrderHistory/orderHistory";
import Account from "./src/components/AccountPage/accountPage";
import Courier from "./src/components/CourierHome/courierHome";
import CustomerAccount from "./src/components/CustomerAccountPage/customerAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const Stack = createNativeStackNavigator();

  ///////////////////////////////
  /// ASYNC STORAGE : getItem ////////////////
  ////////////////////////////////

  // To get the value from the TextInput
  const [user, setUser] = useState("");

  const saveValueFunction = () => {
    // Function to save the value in AsyncStorage
    if (user) {
      // To check the input not empty
      AsyncStorage.setItem("@userid", user);
      // Setting a data to a AsyncStorage with respect to a key
      setUser("");
      // Resetting the TextInput
      alert("Data Saved");
      // Alert to confirm
    } else {
      alert("Please fill data");
    }
  };

  /////////////////////////////////////////////////////
  function LogoTitle() {
    return (
      <Image
        style={{ width: 110, height: 30 }}
        source={require("./assets/AppLogoV1.png")}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

      {/* <Stack.Screen name="Login" component={Login} /> */}

        {/* <Stack.Screen name="Account" component={Account} /> */}
       
        {/* <Stack.Screen
          name="Courier"
          component={Courier}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="LOGOUT"
                color="#DA583B"
              />
            ),
          }}
        /> */}
         <Stack.Screen
          name="CustomerAccount"
          component={CustomerAccount}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="LOGOUT"
                color="#DA583B"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurants}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="LOGOUT"
                color="#DA583B"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="LOGOUT"
                color="#DA583B"
              />
            ),
          }}
        />
        <Stack.Screen
          name="History"
          component={OrderHistory}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="LOGOUT"
                color="#DA583B"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
