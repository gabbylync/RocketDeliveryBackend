import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../../styles"
import React, { useState } from 'react'
import ForwardButton from "./ForwardButton/Forwardbutton"
import {
    Button,
    TextInput,
    Text,
    View,
    Image,
} from "react-native"
export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fail, setFail] = useState(false)
    const [noID, setNoID] = useState(false)

    const loginPost = async () => {
        try {
            if (email !== '' || password !== '') {
                console.log("email: ", email, ", password: ", password)
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                })
                const json = await response.json()
                if (response && response.status === 200) {
                    setEmail('')
                    setPassword('')
                    setFail(false)
                    setNoID(false)
                    await AsyncStorage.setItem('@user', json.user_id)
                    await AsyncStorage.setItem('@customer', json.customer_id)
                    await AsyncStorage.setItem('@courier', json.courier_id)

                    console.log("here", json.customer_id, json.courier_id )

                    if (json.customer_id > 0 && json.courier_id > 0) {
                        navigation.navigate('Account')
                    } else if (json.customer_id > 0) {
                        await AsyncStorage.setItem('@account', 'customer')
                        navigation.navigate('Restaurant')
                    } else if (json.courier_id > 0) {
                        await AsyncStorage.setItem('@account', 'courier')
                        navigation.navigate('Courier')
                    } else {
                        // throw new Error(`User must have a courier or customer ID. user_id: ${json.user_id}`)
                        setNoID(true)
                    }
                } else {
                    setEmail('')
                    setPassword('')
                    setFail(true)
                    console.log("login: ", json)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
          {/* <ForwardButton
        onPress={() => {
          navigation.navigate("Courier");
        }}
      /> */}
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/AppLogoV2.png")}
                />
               
                <br />
                <br />
                <br />
                <br />
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.welcomeText2} >Login to begin</Text>
                <br />
                <br />
                <Text style={styles.emailText}> Email </Text>
                <br />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder={"Enter your primary email here"}
                    style={styles.input}
                />
                <br />
                <Text style={styles.passText}> Password </Text>
                <br />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder={"Password"}
                    style={styles.input}
                    secureTextEntry
                />
                  {noID ? (
                    <div>
                        <br />
                        <Text  style={styles.failedLogin}>User must have a courier or customer ID. Contact Admin to have one assigned.</Text>
                        <br />
                        <br />
                        <br />
                    </div>

                ) : (
                    <br />
                )}
                {fail ? (
                    <div>
                        <br />
                        <Text style={styles.failedLogin}>Failed to login. Please try again.</Text>
                        <br />
                        <br />
                        <br />
                    </div>
                ) : (
                    <br />
                )
                }
                <Button
                    title={"Login"}
                    style={styles.input}
                    color="#DA583B"
                    onPress={() => loginPost()}
                />
            </View>
        </>
    )
}
