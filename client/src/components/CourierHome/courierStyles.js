import { StyleSheet } from "react-native";

const courierstyles = StyleSheet.create({
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
head: {
    height: 44,
    backgroundColor: "#222126",
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  iconbutton: {
    marginLeft: 625,
    marginTop: -14,
  },
  xButton: {
    color: "gray",
    fontSize: 25,
  },
  modalText: {
    color: "#DA583B",
    fontFamily: "Oswald",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "#222126",
  },
  modalText2: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    backgroundColor: "#222126",
  },
  modalText4:{
    fontSize: 16,
  },
  myOrders: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Oswald",
  },
  modalText5:{
    fontSize: 18,
    fontFamily: "Oswald",
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  totalText: {
    fontWeight: "bold",
    marginLeft: 450,
    fontSize: 15,
  },
  quantityText: {
    marginLeft: 250,
    marginTop: -15,
  },
  priceText: {
    marginLeft: 320,
    marginTop: -18,
  },
  nameText: {
    marginTop: 20,
  },
  statusText: {
    marginLeft: 200,
    marginTop: -51,
  },

});

export default courierstyles;