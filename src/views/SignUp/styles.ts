import { StyleSheet } from "react-native";
import { Color } from "../../themes/color";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: Color.pureWhite,
  },
  mainContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  mainImage: {
    width: 200,
    height: 200,
  },
  titleContainer: {
    marginHorizontal: 20,
  },
  subTitleContainer: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  iconContainerStyleLeft: {
    position: "absolute",
    top: 34,
    left: 18,
  },
  iconContainerStyleRight: {
    position: "absolute",
    top: 34,
    right: 18,
  },
  inputIconStyle: {
    position: "absolute",
    top: 34,
    left: 32,
  },
  darkButtonStyle: {
    marginTop: 22,
    marginBottom: 22,
    backgroundColor: Color.slateBlue,
    borderRadius: 12,
  },
  ssoContainer: {
    borderBottomColor: Color.frenchGray,
    borderBottomWidth: 1,
    width: 95,
    marginBottom: 12,
  },
  ssoSmallText: {
    textAlign: "center",
    marginBottom: 3,
    marginHorizontal: 15,
  },
  ssoSmallLine: {
    borderBottomColor: Color.frenchGray,
    borderBottomWidth: 1,
    width: 95,
    marginBottom: 12,
  },
  ssoButtonImageStyle: {
    height: 36,
    width: 36,
    marginLeft: 35,
    marginRight: 15,
    marginTop: 4
  },
});
