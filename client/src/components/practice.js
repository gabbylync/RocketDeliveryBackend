
import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen'
import Login from './components/Login'
import Restaurants from './components/Restaurants'
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Restaurants" component={Restaurants} options={{ title: 'Restaurants' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Bite Me...' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})



















////////////////////////////////////////////////////////////////////////

import styles from "../../styles";
import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import ForwardButton from "./ForwardButton/Forwardbutton";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  onLogin() {
    const { username, password } = this.state;

    Alert.alert("Credentials", `${username} + ${password}`);
  }

//   const response = await fetch('https://localhost:3000/api/login', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     email: '',
//      password: '',
//   }),
// });

  render() {
    return (
      <>
       
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../assets/AppLogoV2.png")}
          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.welcomeText2} >Login to begin</Text>
          <br/>
          <br/>
          <Text style={styles.emailText}> Email </Text>
          <br />
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={"Enter your primary email here"}
            style={styles.input}
          />
          <br />
          <Text style={styles.passText}> Password </Text>
          <br />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.input}
          />
          <br />
          <Button
            title={"Login"}
            style={styles.input}
            color="#DA583B"
            onPress={() => navigation.navigate("Restaurant")}
          />
        </View>
      </>
    );
  }
}