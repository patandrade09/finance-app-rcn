import React from "react";
import { SSOButtonTypes } from "./SSOButton";
import { Pressable, View } from "react-native";
import Typography from "../Typography";
import { styles } from "./styles";
import { Image } from "expo-image";

const SSOButton: React.FC<SSOButtonTypes> = (props) => {
  const { children, onPress, disabled, style, source, imageStyle } = props;
  return (
    <View style={style}>
      <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
        <Image
          style={imageStyle}
          source={source}
        />
        <Typography style={styles.textButton} size="lg">
          {children}
        </Typography>
      </Pressable>
    </View>
  );
};

export default SSOButton;
