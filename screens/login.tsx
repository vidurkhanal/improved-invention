import { StatusBar } from "expo-status-bar";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
  useToast,
} from "native-base";

import React, { useState } from "react";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const login = () => {
    if (email.toLowerCase() === "karun@test.com" && password === "Test123") {
      navigation.navigate("HomePage", { loggedIn: "Karun" });
    } else {
      toast.show({
        status: "error",
        title: "Wrong Email Or Password.",
        description: "Please recheck your email and Password...",
        variant: "solid",
      });
    }
  };
  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto" mt="20%">
      <Heading size="xl" fontWeight="600" color="coolGray.800">
        Welcome To Teewa
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{
              color: "coolGray.800",
              fontSize: "xs",
              fontWeight: 500,
            }}>
            Email ID
          </FormControl.Label>
          <Input type="email" value={email} onChangeText={setEmail} />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: "coolGray.800",
              fontSize: "xs",
              fontWeight: 500,
            }}>
            Password
          </FormControl.Label>
          <Input type="password" value={password} onChangeText={setPassword} />
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          _text={{ color: "white" }}
          onPress={login}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user.{" "}
          </Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            onPress={() => navigation.navigate("Register")}>
            Sign Up
          </Link>
        </HStack>
      </VStack>
      <StatusBar style="dark" />
    </Box>
  );
};

export default LoginScreen;
