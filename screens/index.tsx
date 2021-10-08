import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button, Flex, Text, Image } from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_500Medium } from "@expo-google-fonts/raleway";

export const Index = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Raleway_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Box safeArea bg="#353b48" height="100%">
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Image
          source={{
            uri: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/244437194_566459817933847_5776476956059695164_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=vaxqIk_K7wIAX8y_eCp&edm=AJXOVykBAAAA&ccb=7-4&oh=f73ca1f186316eebdb30e4f8e1f0c052&oe=6167461F&_nc_sid=9c1db7&ig_cache_key=MjY3OTE5MzgzOTI4MDY2OTU5Nw%3D%3D.2-ccb7-4",
          }}
          alt="Logo"
          size="lg"
          my="10px"
        />
        <Text color="white" fontSize="24" fontWeight="bold" my="20px">
          Welcome To Teewa...
        </Text>
        <Button
          backgroundColor="white"
          _text={{ color: "black" }}
          onPress={() => navigation.navigate("Login")}>
          Get Started
        </Button>
        <StatusBar style="light" />
      </Flex>
    </Box>
  );
};
