import { Box, Text } from "native-base";
import React from "react";

const HomePageScreen = ({ loggedIn }: { loggedIn: string }) => {
  return (
    <Box safeArea>
      <Text>Hello from HomePage...</Text>
    </Box>
  );
};

export default HomePageScreen;
