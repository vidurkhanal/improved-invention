import { StatusBar } from "expo-status-bar";
import { Box, Button, FormControl, Heading, Input, VStack } from "native-base";
import React from "react";

const ReegisterScreen = () => {
  return (
    <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8" mt="20%">
      <Heading size="xl" color="coolGray.800" fontWeight="600">
        New To Teewa?
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}>
            Email
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}>
            Password
          </FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: "muted.700", fontSize: "xs", fontWeight: 500 }}>
            Confirm Password
          </FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo" _text={{ color: "white" }}>
          Sign up
        </Button>
      </VStack>
      <StatusBar style="dark" />
    </Box>
  );
};

export default ReegisterScreen;
