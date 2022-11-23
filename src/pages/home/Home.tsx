import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../../components/Button";

const Home = () => {
  return (
    <Box
      minH={{ base: "100vh" }}
      bg={"blue.100"}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      rowGap={{ base: "4rem" }}
      justifyContent={{ base: "flex-start", md: "center" }}
      py={{ base: "48" }}
      px={{ base: "8" }}
      textAlign={"center"}
      position="relative"
      fontWeight="bold"
      color={"blue.900"}
    >
      <Box
        zIndex={2}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
        rowGap="1rem"
      >
        <Text
          width={{ base: "100%", md: "60%", lg: "50%" }}
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        >
          Smarter way to automate your crypto trading
        </Text>
        <Text
          width={{ base: "100%", md: "80%", lg: "70%" }}
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        >
          Best crypto trading bots, algorithmic orders, portfolio management and
          free Demo mode — all in one place.
        </Text>
      </Box>

      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        rowGap="1rem"
        zIndex={2}
      >
        <CustomButton
          size="lg"
          title="Start 7 day free trail"
          onClick={() => {}}
        />
        <Text>*No credit card required</Text>
      </Box>
    </Box>
  );
};

export default Home;
