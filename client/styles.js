import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
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
    width: 100,
    height: 45,
    stretch: {
      width: 100,
      height: 100,
      resizeMode: "stretch",
    },
  },

  dropdown1BtnStyle: {
    backgroundColor: "#DA583B",
    borderRadius: 15,
    borderWidth: 0.51,
    width: 150,
    height: 40,
    marginLeft: 45,
  },
  logout: {
    width: 30,
  },
  dropdown2BtnStyle: {
    backgroundColor: "#DA583B",
    borderRadius: 15,
    borderWidth: 0.51,
    width: 150,
    height: 40,
    marginLeft: 73,
  },
  dropdown1BtnTxtStyle: {
    color: "#FFFFFF",
    fontFamily: "Oswald",
  },
  dropdownsRow: {
    flexDirection: "row",
  },
  iconContent: {
    marginLeft: 70,
    marginTop: -20,
  },
  iconContent2: {
    marginLeft: 290,
    marginTop: -42,
  },
  order:{
    padding:10,
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    
  },
  footer: {
    backgroundColor: "white",
    padding: 40,
    height: 5,
    borderWidth: 0.51,
    borderColor: `#dcdcdc`,
  },
  footerText:{
    marginLeft: -32,
    marginTop: 8, 
    fontFamily: "Oswald", 
    fontSize: 15,
  },
  footerText2:{
    marginLeft: -40,
    marginTop: 5, 
    fontFamily: "Oswald",
    fontSize: 15,
  },
  ////// MODAL FOR ORDER PAGE /////
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    marginLeft: 250,
    bottom: 36,
    width: 150,
    height: 40,
    
  },
  buttonOpen: {
    backgroundColor: '#DA583B',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  ////// END OF ORDER MODAL //////////
});

export default styles;
