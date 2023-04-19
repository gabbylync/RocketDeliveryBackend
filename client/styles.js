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
  fontFamily: 'Oswald',
  fontSize: 22,
  fontWeight: 'bold',
  marginLeft: 20
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
    backgroundColor: '#DA583B',
    borderRadius: 15,
    borderWidth: .51, 
    width: 150,
    height: 40,
    marginLeft: 45,
},
logout: {
    width: 30,

},
dropdown2BtnStyle: {
    backgroundColor: '#DA583B',
    borderRadius: 15,
    borderWidth: .51, 
    width: 150,
    height: 40,
    marginLeft: 73,
},
dropdown1BtnTxtStyle: {
    color: "#FFFFFF",
    fontFamily: 'Oswald',
},
dropdownsRow: {
    flexDirection: 'row',
},
footer: {
    backgroundColor: "white",
    padding: 40,
    height: 5,
    borderWidth: .51,
    borderColor: `#dcdcdc`,
}


});

export default styles;
