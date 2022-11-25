import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const DashboardLayout = (props: any) => {
  const navigate = useNavigate();
  return (
    <Flex minH="100vh" boxShadow="md">
      <Flex
        alignItems="flex-start"
        flexDirection={"column"}
        justifyContent="flex-start"
        bg={"blue.100"}
        color={"blue.900"}
        p={4}
        mr={1}
        rowGap="1rem"
        minW={"15vw"}
        boxShadow="md"
      >
        <SideLayoutButton
          onClick={() => navigate("/dashboard")}
          label="Dashboard"
        />
        <SideLayoutButton
          onClick={() => navigate("/trading-bots")}
          label="Trading Bot"
        />
        <SideLayoutButton label="Bot Marketplace" />
        <SideLayoutButton label="Profile" />
        <SideLayoutButton label="FAQ" />
        <SideLayoutButton label="Logout" />
      </Flex>
      {props.children}
    </Flex>
  );
};

const SideLayoutButton = (props: any) => {
  return (
    <Button
      w="100%"
      px={6}
      py={2}
      border="2px solid"
      borderColor={"blue.900"}
      variant={"unstyled"}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
};

export default DashboardLayout;
