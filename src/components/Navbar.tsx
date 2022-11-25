import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const [toggleIcon, setToggleIcon] = useState(false);
  function toggle() {
    setToggleIcon(!toggleIcon);
  }
  const navigate = useNavigate();

  const navbar = [
    {
      text: "Platform",
      fn: () => {
        setToggleIcon(!toggleIcon);
        navigate("/");
      },
    },
    { text: "Resources", fn: () => {} },
    {
      text: "Pricing",
      fn: () => {
        setToggleIcon(!toggleIcon);
        navigate("/pricing");
      },
    },
    { text: "About", fn: () => {} },
  ];

  return (
    <Box bg={"blue.100"} zIndex={4} as="section">
      <Box as="nav" bg="bg-surface">
        <HStack
          boxShadow={"lg"}
          position={"sticky"}
          p={2}
          spacing="10"
          justify="space-between"
        >
          <Text fontSize={"3xl"}>TradeBot</Text>
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="link" spacing="8">
                {navbar.map((item, key) => (
                  <Button onClick={item.fn} key={key}>
                    {item.text}
                  </Button>
                ))}
              </ButtonGroup>
              <HStack spacing="3">
                <Button onClick={() => navigate("/signin")} variant="ghost">
                  Sign in
                </Button>
                <Button onClick={() => navigate("/signup")} variant="ghost">
                  Sign up
                </Button>
              </HStack>
            </Flex>
          ) : (
            <IconButton
              onClick={toggle}
              variant="ghost"
              icon={
                toggleIcon ? (
                  <AiOutlineClose fontSize="1.25rem" />
                ) : (
                  <FiMenu fontSize="1.25rem" />
                )
              }
              aria-label="Open Menu"
            />
          )}
        </HStack>

        {isMobile && toggleIcon ? (
          <ButtonGroup
            minWidth={"100vw"}
            rowGap={"1rem"}
            justifyContent="flex-start"
            width={"64"}
            pt={24}
            px={16}
            flexDirection={"column"}
            variant="solid"
            transition="1000ms all"
            opacity={toggleIcon ? 100 : 0}
            position="fixed"
            zIndex={100}
            height="100vh"
            bg={"blue.900"}
          >
            {navbar.map((item, key) => (
              <Button onClick={item.fn} key={key}>
                {item.text}{" "}
              </Button>
            ))}
          </ButtonGroup>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
