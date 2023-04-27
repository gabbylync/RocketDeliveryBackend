import { StyleSheet } from "react-native";

const accountstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },
  accountText: {
    textAlign: "center",
    fontFamily: "Oswald",
    fontWeight: "bold",
    fontSize: 35,
  },
  customer: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginLeft: 100,
  },
  customerPhoto:{
    marginLeft: -380,
    marginTop: 90,
 
  },
  courierPhoto:{
    marginLeft: 210,
    marginTop: -265,
  },
  courier: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});

export default accountstyles;
