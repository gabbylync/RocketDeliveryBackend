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
  // this is the logo on the header and login page //
  logo: {
    width: 100,
    height: 45,
    stretch: {
      width: 100,
      height: 100,
      resizeMode: "stretch",
    },
    // this is the header formatt ///
    header: {
      width: 100,
      height: 55,
      justifyContent: "center",
      backgroundColor: "red",
    },
  },
});

export default styles;
