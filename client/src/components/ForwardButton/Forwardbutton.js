import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import forwardButtonstyles from "./forwardStyles";

export default function ForwardButton(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={forwardButtonstyles.btnContainer}>
      <Image source={require("../../../assets/white-arrow-icon-5.png")} style={forwardButtonstyles.btnIcon} />
    </TouchableHighlight>
  );
}

ForwardButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};