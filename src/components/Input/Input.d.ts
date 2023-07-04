import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";
import { Dispatch, SetStateAction } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export type VMaskType = "phone" | "date" | "email" | "currency";

export interface InputTypes {
  label?: string;
  placeholder?: string;
  helper?: string;
  iconName?: Ionicons;
  iconColor?: string;
  value: string;
  iconStyle?: StyleProp<TextStyle> | undefined;
  iconContainerStyle?: StyleProp<TextStyle> | undefined;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  error?: boolean;
  iconSize?: number;
  onIconPressed?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  placeholderTextColor?: string;
  onChangeText?: ((text: string) => void) | undefined;
}
