import React, { Component } from "react";
import { View, StatusBar, TextInput, Animated } from "react-native";
import styles from "./style";

const inputInitCls = {
  height: 50,
  width: "100%",
  fontSize: 20,
  color: "#000",
  borderWidth: 1,
  borderColor: "#dadce0",
  fontSize: 15,
  borderRadius: 4,
  paddingHorizontal: 12
};

const inputFocusCls = {
  height: 50,
  width: "100%",
  fontSize: 20,
  color: "#000",
  borderWidth: 2,
  borderColor: "#05CE1D",
  fontSize: 15,
  borderRadius: 4,
  paddingHorizontal: 12
};

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
    inputClass: inputInitCls
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(
      this.props.value === "" ? 0 : 1
    );
  }

  handleFocus = () =>
    this.setState({ isFocused: true, inputClass: inputFocusCls });
  handleBlur = () =>
    this.setState({ isFocused: false, inputClass: inputInitCls });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 200
    }).start();
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: "absolute",
      left: 0,

      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [13, -10]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#000", "#aaa"]
      }),
      backgroundColor: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ["#f5fcff", "#f5fcff"]
      }),
      zIndex: 1,
      marginLeft: 10,
      paddingHorizontal: 5
    };

    return (
      <View style={{ width: "100%" }}>
        <Animated.Text style={labelStyle}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={this.state.inputClass}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}
