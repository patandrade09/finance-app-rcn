import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    backgroundColor:"#FFFFFF"
  },
  mainContainer: {
    marginTop:20,
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
});
