import { StyleSheet } from "react-native";
import { Color } from "../../themes/color";

export const styles = StyleSheet.create({
  button: {
    display:'flex',
    flexDirection:'row',
    borderRadius: 12,
    borderColor: Color.slateBlue,
    borderWidth: 1,
    height: 50,
    width: 370,
  },
  textButton: {
    color: Color.slateBlue,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 7,
  },
});
