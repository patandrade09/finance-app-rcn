import { StyleSheet } from "react-native";
import { Color } from "../../themes/color";

export default StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: Color.slateBlue,
    height: 800,
  },
  mainImage: {
    height: 360,
    width: 360,
    marginTop: 46,
    marginBottom: 26,
  },
  titleContainer: {
    marginHorizontal: 17,
    marginBottom: 8,
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: 36,
  },
  buttonStyle: {
    backgroundColor: Color.lightBlue,
    borderRadius: 12,
  }
});
