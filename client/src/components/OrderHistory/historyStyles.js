import { StyleSheet } from "react-native";

const historystyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // marginTop: 30,
    // justifyContent: "center",
    // backgroundColor: "#fff",
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
  myOrders: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Oswald",
  },
  text: {
    margin: 6,
    marginLeft: 30,
    fontSize: 20,
    //  fontWeight: "bold",
    //   textAlign: "center"
  },

  iconbutton: {
    marginLeft: 510,
    marginTop: -14,
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
  quantityText: {
    marginLeft: 350,
    marginTop: -15,
  },
  priceText: {
    marginLeft: 500,
    marginTop: -18,
  },
  totalText: {
    fontWeight: "bold",
    marginLeft: 450,
    fontSize: 15,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  xButton: {
    color: "gray",
    fontSize: 25,
  },
  nameText: {
    marginTop: 20,
    marginLeft: 30,
  },
  statusText: {
    marginLeft: 268,
    marginTop: -51,
  },
});

export default historystyles;
