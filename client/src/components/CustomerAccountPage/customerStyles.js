import { StyleSheet } from "react-native";

const customerstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // marginTop: 30,
    // justifyContent: "center",
    // backgroundColor: "#fff",
  },
  headertext: {
    fontFamily: "Oswald",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  },
  loggedIn: {
    fontFamily: "Oswald",
    fontSize: 18,
    marginLeft: 20,
  },
  email: {
    fontFamily: "Oswald",
    fontSize: 15,
    marginLeft: 20,
  },
  emailText:{
    color: "gray",
    fontSize: 10,
    marginLeft: 35,
  },
  input: {
    width: 550,
    height: 44,
    padding: 10,
    borderWidth: .5,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    color: "black",
    marginLeft: 35,
  },
  logininput: {
    width: 550,
    height: 44,
    padding: 10,
    borderWidth: .5,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    color: "gray",
    marginLeft: 35,
  },
  updateButton:{
    padding: 10,
    elevation: 2,
    marginLeft: 35,
    // bottom: 36,
    width: 550,
    height: 40,
    backgroundColor: "#DA583B",
    borderRadius: 5, 
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  
  },

});

export default customerstyles;
