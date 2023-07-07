export interface ButtonTypes {
    children?: string | ReactElement;
    onPress: () => void;
    disabled?: boolean;
    theme?: 'dark' | 'light';
    link?: boolean;
    style?: StyleProp<View> | undefined;
  }