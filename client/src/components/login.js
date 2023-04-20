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
