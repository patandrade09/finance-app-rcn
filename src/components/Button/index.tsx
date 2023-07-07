import React from "react";
import { ButtonTypes } from "./Button";
import { Pressable, View } from "react-native";
import Typography from "../Typography";
import { styles } from "./styles";

const Button: React.FC<ButtonTypes> = (props) => {
  const { children, onPress, disabled, style } = props;
  return (
    
    <View style={style}>
      <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
        <Typography style={styles.textButton} size="lg">
          {children}
        </Typography>
      </Pressable>
    </View>
    
  );
};

export default Button;
