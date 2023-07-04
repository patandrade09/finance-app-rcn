import React from "react";
import { Text } from "react-native";
import { TypographyTypes } from "./Typography";
import { useFonts } from "expo-font";
import { styles } from "./styles";

const Typography: React.FC<TypographyTypes> = (props) => {
  const [loaded] = useFonts({
    "Heebo-Thin": require("../../assets/fonts/Heebo/static/Heebo-Thin.ttf"),
    "Heebo-ExtraLight": require("../../assets/fonts/Heebo/static/Heebo-ExtraLight.ttf"),
    "Heebo-Light": require("../../assets/fonts/Heebo/static/Heebo-Light.ttf"),
    "Heebo-Regular": require("../../assets/fonts/Heebo/static/Heebo-Regular.ttf"),
    "Heebo-Medium": require("../../assets/fonts/Heebo/static/Heebo-Medium.ttf"),
    "Heebo-SemiBold": require("../../assets/fonts/Heebo/static/Heebo-SemiBold.ttf"),
    "Heebo-Bold": require("../../assets/fonts/Heebo/static/Heebo-Bold.ttf"),
    "Heebo-ExtraBold": require("../../assets/fonts/Heebo/static/Heebo-ExtraBold.ttf"),
    "Heebo-Black": require("../../assets/fonts/Heebo/static/Heebo-Black.ttf"),
  });

  const { children, style, color, fontWeight, size, uppercase, numberOfLines } =
    props;

  const mainSizes = {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 40,
    default: 16,
  };

  const mainLineHeight = {
    xxs: 16.5,
    xs: 20,
    sm: 21,
    md: 24,
    lg: 32,
    xl: 40,
    "2xl": 48,
    default: 24,
  };

  const families = {
    "100": "Heebo-Thin",
    "200": "Heebo-ExtraLight",
    "300": "Heebo-Light",
    "400": "Heebo-Regular",
    "500": "Heebo-Medium",
    "600": "Heebo-SemiBold",
    "700": "Heebo-Bold",
    "800": "Heebo-ExtraBold",
    "900": "Heebo-Black",
    default: "Heebo-Regular",
  };

  const calculateSize = () => {
    return {
      fontSize: mainSizes[size || "default"],
      lineHeight: mainLineHeight[size || "default"],
    };
  };

  const calculateWeight = () => {
    return families[fontWeight || "default"];
  };

  const { fontSize, lineHeight } = calculateSize();

  if (!loaded) {
    return null;
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {
          color,
          fontFamily: calculateWeight(),
          fontSize,
          lineHeight,
          textTransform: uppercase ? "uppercase" : "none",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
