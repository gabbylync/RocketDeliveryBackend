import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import backButtonstyles from "./backButtonstyles";

export default function BackButton(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={backButtonstyles.btnContainer}>
      <Image source={require("../../../assets/circled-left-2.png")} style={backButtonstyles.btnIcon} />
    </TouchableHighlight>
  );
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
