import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "../../components/Input/styles";
import { InputTypes } from "./Input";
import Typography from "../Typography";
import { Color } from "../../themes/color";
import Ionicons from "@expo/vector-icons/Ionicons";

const Input: React.FC<InputTypes> = (props) => {
  const {
    label,
    placeholder,
    helper,
    iconName,
    iconColor,
    value,
    iconStyle,
    iconContainerStyle,
    keyboardType,
    secureTextEntry,
    error,
    iconSize,
    onIconPressed,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit,
    placeholderTextColor,
    onChangeText
  } = props;

  return (
    <>
      <View>
        <Typography
          fontWeight="500"
          color={Color.slateBlue}
          style={{ marginLeft: 3 }}
        >
          {label}
        </Typography>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
        {error && (
          <Typography
            fontWeight="400"
            size="sm"
            color={Color.red}
            style={{ marginLeft: 3 }}
          >
            {helper}
          </Typography>
        )}
        <View style={iconContainerStyle}>
          <Pressable onPress={onIconPressed}>
            <View>
              <Ionicons name={iconName} size={iconSize} color={iconColor} style={iconStyle}/>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Input;
