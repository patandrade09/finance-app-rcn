import React from "react";
import styles from "./styles";
import { SafeAreaView, StatusBar, Image, View, ScrollView } from "react-native";
import Typography from "../../components/Typography";
import { Color } from "../../themes/color";
import Input from "../../components/Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../../components/Button";
import SSOButton from "../../components/SSOButton";
import GoogleLogo from "../../assets/images/googleLogo.svg";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setconfirmPasswordVisible] =
    React.useState(false);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
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
                fontWeight="500"
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
              value={name}
              onChangeText={setName}
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
              value={email}
              iconName={"mail"}
              iconColor={Color.slateBlue}
              iconSize={24}
              iconContainerStyle={styles.iconContainerStyleLeft}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name={"lock-closed"}
              size={24}
              color={Color.slateBlue}
              style={{ position: "absolute", top: 34, left: 38 }}
            />
            <Input
              placeholder={"Crie uma senha"}
              placeholderTextColor={Color.coolGray}
              value={password}
              onChangeText={setPassword}
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
              style={{ position: "absolute", top: 34, left: 38 }}
            />
            <Input
              placeholder={"Confirme a senha"}
              placeholderTextColor={Color.coolGray}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!confirmPasswordVisible}
              iconName={confirmPasswordVisible ? "eye-off" : "eye"}
              iconColor={Color.slateBlue}
              iconSize={24}
              iconContainerStyle={styles.iconContainerStyleRight}
              onIconPressed={() =>
                setconfirmPasswordVisible(!confirmPasswordVisible)
              }
            />
            <Button
              onPress={() => alert("ola")}
              style={{ marginTop: 22, marginBottom: 22, backgroundColor: Color.slateBlue, borderRadius: 12 }}
            >
              {"Cadastrar"}
            </Button>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "space-around",
                marginBottom: 22
              }}
            >
              <View
                style={{
                  borderBottomColor: Color.frenchGray,
                  borderBottomWidth: 1,
                  width: 95,
                  marginBottom: 12,
                }}
              ></View>
              <Typography
                color={Color.frenchGray}
                style={{
                  textAlign: "center",
                  marginBottom: 3,
                  marginHorizontal: 15,
                }}
              >
                {" ou conecte-se com "}
              </Typography>
              <View
                style={{
                  borderBottomColor: Color.frenchGray,
                  borderBottomWidth: 1,
                  width: 95,
                  marginBottom: 12,
                }}
              ></View>
            </View>
            <SSOButton
              onPress={() =>  alert("ASDFJSLAKDFJ")}
              style={{marginBottom: 32}}
              imageStyle={{height: 36, width:36, marginLeft:35, marginRight:15, marginTop: 4}}
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
