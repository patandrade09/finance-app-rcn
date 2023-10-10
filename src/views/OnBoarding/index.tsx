import React from "react";
import { View, Text, Image, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import Typography from "../../components/Typography";


const OnBoarding = ({ route, navigation }: any) => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle={"dark-content"} />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.mainImage}
              source={require("../../assets/images/onBoardingImage.png")}
            />
            <Typography
              style={styles.titleContainer}
              size="xl"
              fontWeight="700"
              color={"#ecf8f8"}
            >
              {"Tenha o controle das suas finanças, conheça o Finance Up"}
            </Typography>
            <View style={styles.buttonContainer}>
              <Button
                style={[styles.buttonStyle, { marginBottom: 25 }]}
                onPress={() => alert("ola")}
              >
                {"Login"}
              </Button>
              <Button
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("SignUp")}
              >
                {"Cadastrar"}
              </Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OnBoarding;
