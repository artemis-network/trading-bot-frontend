import { Box, Text } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <Box bg={"blue.100"} height="100vh" width="100vw">
      <Text>Dashboard</Text>
      <Text>{localStorage.getItem("name")}</Text>
    </Box>
  );
};

export default DashBoard;
