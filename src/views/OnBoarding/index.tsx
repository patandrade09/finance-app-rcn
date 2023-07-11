import React from "react";
import { View, Text, Image, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { Color } from "../../themes/color";

const OnBoarding = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Image
              style={styles.mainImage}
              source={require("../../assets/images/onBoardingImage.png")}
            ></Image>
          </View>
          <View style={{ display: "flex", marginHorizontal: 20 }}>
            <Typography
              style={styles.titleContainer}
              size="xl"
              fontWeight="500"
              color={"#362784"}
            >
              {"Tenha o controle das suas finanças"}
            </Typography>
            <Typography
              style={styles.subTitleContainer}
              size="lg"
              fontWeight="700"
              color={Color.slateBlue}
            >
              {"Finance Up"}
            </Typography>
            <Button
              style={{
                backgroundColor: Color.slateBlue,
                borderRadius: 12,
                marginBottom: 18
              }}
              onPress={() => alert("ola")}
            >
              {"Login"}
            </Button>
            <Button
              style={{
                backgroundColor: "#362784",
                borderRadius: 12,
                marginBottom: 18
              }}
              onPress={() => alert("ola")}
            >
              {"Cadastrar"}
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OnBoarding;
