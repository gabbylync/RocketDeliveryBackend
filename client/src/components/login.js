import styles from "../../styles";
import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  Image,
  SafeAreaView,
} from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
    
      <View style={styles.container}>
        <Image
              style={styles.logo}
              source={require("../../assets/AppLogoV2.png")}
            />
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          color="#f194ff"
          onPress={() => navigation.navigate('Restaurants')}
        />
      </View>
     
    );
  }
}

