import React from "react";
import styles from "./styles";
import { SafeAreaView, StatusBar, Image, View } from "react-native";
import Typography from "../../components/Typography";
import { Color } from "../../themes/color";
import Input from "../../components/Input";

const SignUp = () => {
  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <Image
            style={styles.mainImage}
            source={require("../../images/signUpImage.png")}
          />
        <View style={styles.titleContainer}>
        <Typography style={styles.subTitleContainer} size="xl" fontWeight="500" color={Color.slateBlue} >
          {"Começe agora a controlar suas finanças"}
        </Typography>
        <Typography size="lg" fontWeight="300" color={Color.slateBlue} >
          {"Crie sua conta aqui"}
        </Typography>
        </View>
        </View>
        <View style={styles.inputContainer}>
          <Input label="" placeholder="" value="" setValue={() => {}}/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
