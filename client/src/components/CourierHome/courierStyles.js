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
    marginLeft: 515,
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
    textAlign: "left",
    fontSize: 22,
    backgroundColor: "#222126",
  },
  modalText2: {
    textAlign: "left",
    color: "white",
    backgroundColor: "#222126",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  totalText: {
    fontWeight: "bold",
    marginLeft: 290,
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