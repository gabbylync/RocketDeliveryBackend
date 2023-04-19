import React from "react";
import { View, StyleSheet, SafeAreaView, Image, Button } from "react-native";
import Login from "./src/components/login";
import styles from "../../../../shootermcgabbin/Codeboxx/RocketDeliveryBackend/client/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "./src/components/Home/restaurants";

const App = () => {
  const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
