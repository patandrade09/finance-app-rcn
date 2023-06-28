import React from 'react';
import { ColorValue, StyleProp, TextStyle } from 'react-native';

export interface TypographyTypes {
  children: string | React.ReactNode;
  style?: StyleProp<TextStyle> | undefined;
  color?: ColorValue | undefined;
  fontWeight?: '200' | '300' | '400' | '500' | '600' | '700';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  uppercase?: boolean;
  numberOfLines?: number;
}