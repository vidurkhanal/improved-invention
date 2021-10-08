import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Index } from "./screens";
import LoginScreen from "./screens/login";
import { NativeBaseProvider } from "native-base";
import ReegisterScreen from "./screens/register";
import HomePageScreen from "./screens/homepage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Index}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={ReegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePageScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
