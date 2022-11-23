import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlineCopyright } from "react-icons/ai";
import { theme } from "../../../config/theme.config";

const Form = (props: any) => {
  return (
    <Box minH="100vh" bg={"blue.100"} display={"flex"} justifyContent="center">
      <Box
        m={4}
        boxShadow="1px 1px 1px gray, -1px -1px 1px white"
        bg="blue.100"
        borderRadius={"xl"}
        p={{ base: "8" }}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        rowGap={{ base: ".6rem" }}
      >
        {props.children}
        <Flex justifyContent={"center"} alignItems="center" columnGap={".4rem"}>
          <AiOutlineCopyright />
          <Text color={theme.highLightColor} variant={"link"}>
            TradeBot
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Form;
