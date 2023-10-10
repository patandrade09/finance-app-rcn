import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView, StatusBar, Image, View, ScrollView } from "react-native";
import Typography from "../../components/Typography";
import { Color } from "../../themes/color";
import Input from "../../components/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../../components/Button";
import SSOButton from "../../components/SSOButton";
import GoogleLogo from "../../assets/images/googleLogo.svg";
import { NewUser } from "../../models/NewUser";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState<NewUser>(initialFormData);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Image
              style={styles.mainImage}
              source={require("../../assets/images/signUpImage.png")}
            />
            <View style={styles.titleContainer}>
              <Typography
                style={styles.subTitleContainer}
                size="xl"
                fontWeight="700"
                color={Color.slateBlue}
              >
                {"Começe agora a controlar suas finanças"}
              </Typography>
              <Typography size="lg" fontWeight="300" color={Color.slateBlue}>
                {"Crie sua conta aqui"}
              </Typography>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder={"Insira seu nome completo"}
              placeholderTextColor={Color.coolGray}
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
              iconName={"person"}
              iconColor={Color.slateBlue}
              iconSize={24}
              iconContainerStyle={styles.iconContainerStyleLeft}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder={"Insira seu e-mail"}
              placeholderTextColor={Color.coolGray}
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              iconName={"mail"}
              iconColor={Color.slateBlue}
              iconSize={24}
              iconContainerStyle={styles.iconContainerStyleLeft}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name={"lock-closed"}
              size={24}
              color={Color.slateBlue}
              style={styles.inputIconStyle}
            />
            <Input
              placeholder={"Crie uma senha"}
              placeholderTextColor={Color.coolGray}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry={!passwordVisible}
              iconName={passwordVisible ? "eye-off" : "eye"}
              iconColor={Color.slateBlue}
              iconSize={24}
              iconContainerStyle={styles.iconContainerStyleRight}
              onIconPressed={() => setPasswordVisible(!passwordVisible)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name={"lock-closed"}
              size={24}
              color={Color.slateBlue}
              style={styles.inputIconStyle}
            />
            <Input
              placeholder={"Confirme a senha"}
              placeholderTextColor={Color.coolGray}
              value={formData.confirmPassword}
              onChangeText={(text) => handleInputChange("confirmPassword", text)}
              secureTextEntry={!confirmPasswordVisible}
              iconName={confirmPasswordVisible ? "eye-off" : "eye"}
              iconColor={Color.slateBlue}
              iconSize={24}
              iconContainerStyle={styles.iconContainerStyleRight}
              onIconPressed={() =>
                setconfirmPasswordVisible(!confirmPasswordVisible)
              }
            />
            <Button onPress={() => alert("ola")} style={styles.darkButtonStyle}>
              {"Cadastrar"}
            </Button>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "space-around",
                marginBottom: 22,
              }}
            >
              <View style={styles.ssoContainer}></View>
              <Typography color={Color.frenchGray} style={styles.ssoSmallText}>
                {" ou conecte-se com "}
              </Typography>
              <View style={styles.ssoSmallLine}></View>
            </View>
            <SSOButton
              onPress={() => alert("ASDFJSLAKDFJ")}
              style={{ marginBottom: 32 }}
              imageStyle={styles.ssoButtonImageStyle}
              source={GoogleLogo}
            >
              {"Cadastre-se com Google"}
            </SSOButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
