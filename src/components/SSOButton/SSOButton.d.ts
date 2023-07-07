export interface SSOButtonTypes {
    children?: string | ReactElement;
    onPress: () => void;
    disabled?: boolean;
    theme?: 'dark' | 'light';
    link?: boolean;
    style?: StyleProp<View> | undefined;
    source?: ImageSourcePropType;
    imageStyle?: StyleProp<View> | undefined;
  }