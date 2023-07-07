import { StyleSheet } from "react-native";
import { Color } from "../../themes/color";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: Color.slateBlue,
    height: 50,
    width: 370
  },
  textButton: {
    color: 'white',
    fontSize: 22,
    fontWeight: "700",
    textAlign:'center',
    marginTop:7
  }
});
