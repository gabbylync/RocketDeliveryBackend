import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },
  emailText: {
    marginRight: 213,
  },
  passText: {
    marginRight: 189,
  },
  failedLogin: {
    color: "red",
    fontFamily: "Oswald",
    fontWeight: "bold",
  },
  welcomeText: {
    fontFamily: "Oswald",
    fontWeight: "bold",
    fontSize: 25,
    marginRight: 100,
  },
  welcomeText2: {
    fontFamily: "Oswald",
    fontSize: 20,
    marginRight: 130,
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  nearby: {
    fontFamily: "Oswald",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
  },
  // this is the logo on the header and login page //
  logo: {
    width: 350,
    height: 155,
    marginTop: -180,
    stretch: {
      width: 100,
      height: 100,
      resizeMode: "stretch",
    },
  },

  dropdown1BtnStyle: {
    backgroundColor: "#DA583B",
    borderRadius: 15,
    // borderWidth: 0.51,
    width: 150,
    height: 40,
    marginLeft: 75,
  },
  logout: {
    width: 30,
  },
  dropdown2BtnStyle: {
    backgroundColor: "#DA583B",
    borderRadius: 15,
    // borderWidth: 0.51,
    width: 150,
    height: 40,
    marginLeft: 213,
  },
  dropdown1BtnTxtStyle: {
    color: "#FFFFFF",
    fontFamily: "Oswald",
  },
  dropdownsRow: {
    flexDirection: "row",
  },
  // iconContent: {
  //   marginLeft: 70,
  //   marginTop: -20,
  // },
  // iconContent2: {
  //   marginLeft: 390,
  //   marginTop: -22,
  // },
  order: {
    padding: 10,
    width: "100%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
  footer: {
    backgroundColor: "white",
    flex: 1,
    padding: 40,
    height: 2,
    borderWidth: 0.51,
    borderColor: `#dcdcdc`,
  },
  burgerIcon: {
    marginBottom: -70,
    marginLeft: 61,
  },
  clockIcon: {
    marginTop: -28,
    marginLeft: 382,
  },
  footerText: {
    marginLeft: 32,
    marginTop: 33,
    fontFamily: "Oswald",
    fontSize: 15,
  },
  footerText2: {
    marginLeft: 345,
    // marginTop: 35,
    fontFamily: "Oswald",
    fontSize: 15,
  },
  containerFooter: {
    // flex: 1
  },
  ////// MODAL FOR ORDER PAGE /////
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: 5300,
    width: 400,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
    marginLeft: 590,
    bottom: 36,
    width: 150,
    height: 40,
    backgroundColor: "#DA583B",
  },

  buttonClose: {
    backgroundColor: "#DA583B",
    width: 150,
    height: 40,
    marginLeft: 200
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  
  },

  textStyle2: {
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 50,
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center",
  },
  ////// END OF ORDER MODAL //////////
});

export default styles;
