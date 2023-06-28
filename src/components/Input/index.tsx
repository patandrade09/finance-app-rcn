import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "../../components/Input/styles";
import { InputTypes } from "./Input";

const Input: React.FC<InputTypes> = (props) => {
  const {
    label,
    placeholder,
    helper,
    icon,
    value,
    setValue,
    disabled,
    keyboardType,
    secureTextEntry,
    error,
    iconSize,
    onIconPressed,
    style,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
    focus,
    blur,
    currency,
    setCurrency,
  } = props;

  return (
    <>
      <View>
        <TextInput style={styles.input}/>
      </View>
    </>
  );
};

export default Input;
