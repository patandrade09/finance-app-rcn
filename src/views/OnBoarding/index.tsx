import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { Color } from "../../themes/color";

const OnBoarding = ({ navigation }:any) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <SafeAreaView>
        <ScrollView>
          <ImageBackground
            resizeMode="cover"
            style={styles.mainImage}
            source={require("../../assets/images/onBoardingImage.png")}
          >
            <View
              style={{ display: "flex", alignItems: "center", marginTop: 215 }}
            >
              <Typography
                style={styles.titleContainer}
                size="xl"
                fontWeight="700"
                color={"#00235B"}
              >
                {"Tenha o controle das suas finanças, conheça o Finance Up"}
              </Typography>
              <View style={{ marginTop: 140 }}>
                <Button
                  style={{
                    backgroundColor: "#5DA7DB",
                    borderRadius: 12,
                    marginBottom: 18,
                  }}
                  onPress={() => alert("ola")}
                >
                  {"Login"}
                </Button>
                <Button
                  style={{
                    backgroundColor: "#142850",
                    borderRadius: 12,
                    marginBottom: 18,
                  }}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  {"Cadastrar"}
                </Button>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OnBoarding;
