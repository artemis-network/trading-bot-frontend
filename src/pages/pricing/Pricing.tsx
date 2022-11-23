import { Box, Divider, Image, Text } from "@chakra-ui/react";
import BG from "../../assets/img/bg.svg";
import CustomButton from "../../components/Button";
import { CheckIcon } from "@chakra-ui/icons";

const Pricing = () => {
  return (
    <Box
      minH={{ base: "92vh" }}
      bg={"blue.100"}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      rowGap={{ base: "4rem" }}
      justifyContent={{ base: "flex-start", md: "center" }}
      py={{ base: "32" }}
      px={{ base: "8" }}
      textAlign={"center"}
      position="relative"
      fontWeight="bold"
      color={"blue.900"}
    >
      <Image
        height={"92vh"}
        width="100vw"
        src={BG}
        position="absolute"
        zIndex={1}
      />
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
          Plans & pricing
        </Text>
        <Text
          width={{ base: "100%", md: "80%", lg: "70%" }}
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        >
          All Bitsgap subscriptions come with a free 7-day trial on a PRO plan.
        </Text>

        <Text
          width={{ base: "100%", md: "80%", lg: "70%" }}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
        >
          No credit card required.
        </Text>
      </Box>

      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        rowGap="1rem"
        zIndex={2}
        color={"blue.100"}
        px={4}
        py={8}
        columnGap="2rem"
      >
        <Plan
          type="Basic"
          price="$23/mo."
          feat1="2 Active GRID Bots"
          feat2="10 Active DCA Bots"
          feat3="Unlimited Smart orders"
          subfeat1="Futures bots"
          bg={"purple.600"}
        />
        <Plan
          bg={"pink.600"}
          type="Advanced"
          price="$55/mo."
          feat1="5 Active GRID Bots"
          feat2="10 Active DCA Bots"
          feat3="Unlimited Smart orders"
          subfeat1="Futures bots"
          subfeat2="Trailing Up & Down for bots"
        />
        <Plan
          bg={"cyan.600"}
          type="PRO"
          price="$119/mo."
          feat1="20 Active GRID Bots"
          feat2="10 Active DCA Bots"
          feat3="Unlimited Smart orders"
          subfeat1="Futures bots"
          subfeat2="Trailing Up & Down for bots"
          subfeat3="Take Profit for bots"
        />
      </Box>
    </Box>
  );
};

const Plan = (props: any) => {
  return (
    <Box
      bg={props.bg}
      minH="50vh"
      display={"flex"}
      flexDirection="column"
      borderRadius={"xl"}
      p={5}
      rowGap="1rem"
      justifyContent={"space-between"}
    >
      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"}>
        <Text fontSize={"xl"}>{props.type}</Text>
        <Text fontSize={"3xl"}>{props.price}</Text>
      </Box>
      <Divider />
      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"}>
        <Tag label={props.feat1} />
        <Tag label={props.feat2} />
        <Tag label={props.feat3} />
      </Box>
      <Divider />
      <Box display={"flex"} flexDirection="column" alignItems={"flex-start"}>
        <Tag label={props.subfeat1} />
        <Tag label={props.subfeat2} />
      </Box>
      <Divider />
      <CustomButton
        onClick={() => {}}
        size="lg"
        title="START 7 DAY FREE TRAIL"
      />
    </Box>
  );
};

const Tag = (props: any) => (
  <Box
    display={"flex"}
    alignItems="center"
    columnGap={".5rem"}
    justifyContent="flex-start"
  >
    {props.label !== undefined ? <CheckIcon color="blue.100" /> : null}
    <Text fontSize={props.size}>{props.label}</Text>
  </Box>
);

export default Pricing;
