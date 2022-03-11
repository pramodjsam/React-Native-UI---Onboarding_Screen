import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          position: "absolute",
          left: 0,
          flex: 1,
          bottom: 0,
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
        style={styles.wrapper}
        showsButtons={true}
        loop={false}
        paginationStyle={{
          marginRight: width * 0.7,
          marginBottom: height * 0.02,
        }}
        activeDotColor="#8A56AC"
        dotColor="#998FA2"
        nextButton={
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8A56AC",
            }}
          >
            <AntDesign name="arrowright" size={22} color="#FFF" />
          </View>
        }
        prevButton={
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#8A56AC",
              marginHorizontal: 20,
            }}
          >
            <AntDesign name="arrowleft" size={22} color="#FFF" />
          </View>
        }
      >
        <View style={styles.slide}>
          <Image source={require("./images/img.png")} style={styles.img} />
          <Text style={styles.title}>Meet Up UI-Kit</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img2.png")} style={styles.img} />
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img3.png")} style={styles.img} />
          <Text style={styles.title}>Get Started</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("./images/img4.png")} style={styles.img} />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text}>
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.
          </Text>
        </View>
      </Swiper>
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    marginHorizontal: 30,
    paddingTop: 40,
  },
  img: {
    height: height * 0.5,
    width: width * 0.9,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    marginTop: 30,
    marginHorizontal: 10,
    fontFamily: "Montserrat_700Bold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    lineHeight: 25,
    marginLeft: 10,
    marginTop: 20,
  },
});

export default App;
