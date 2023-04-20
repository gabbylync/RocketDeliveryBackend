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
    marginLeft: 351,
    marginTop: -310,
  },

  modalText:{
    color: "#DA583B",
    fontFamily: "Oswald",
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 19, 
    backgroundColor: '#222126',
  }, 

  modalText2: {
    textAlign: 'left',
    color: 'white',
    backgroundColor: '#222126',

  },
  xButton: {
    color: 'gray', 
    fontSize: 25,
  }
});

export default historystyles;
