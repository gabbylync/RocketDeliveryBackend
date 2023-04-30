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
    marginLeft: 535,
    marginTop: -35,
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
  modalText4: {
    fontSize: 16,
  },
  myOrders: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Oswald",
  },
  modalText5: {
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
    marginTop: 25,
    marginLeft: 60,
  },
  statusText: {
    marginLeft: 400,
    marginTop: -51,
  },
  addressText: {
    marginLeft: 175,
    marginTop: -15,
  },
  statusPendingText: {
    backgroundColor: "red",
    width: 60,
    marginLeft: 370,
    marginTop: -35,
  },
  statusInProgressText: {
    backgroundColor: "orange",
    width: 80,
    marginLeft: 370,
    marginTop: -35,
  },
  statusDeliveredText: {
    backgroundColor: "green",
    width: 65,
    marginLeft: 370,
    marginTop: -35,
  },
});

export default courierstyles;
