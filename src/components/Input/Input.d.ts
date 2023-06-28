import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import { Dispatch, SetStateAction } from 'react';

export type VMaskType =
  | 'phone'
  | 'date'
  | 'email'
  | 'currency'

export interface InputTypes {
  label: string;
  placeholder: string;
  helper?: string;
  icon?: string;
  value: string;
  setValue: (v: string) => void;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  error?: boolean;
  iconSize?: number;
  onIconPressed?: () => void;
  style?: StyleProp<TextStyle> | undefined;
  //maskType?: MaskType;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  focus?: () => void;
  blur?: () => void;
  currency?: string | any;
  setCurrency?: Dispatch<SetStateAction<any>> | any;
}