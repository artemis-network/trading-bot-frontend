import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CustomButton from "../../components/Button";
import { BotModel, DashBoardServices } from "./DashboardServices";

const DashBoard = () => {
  const [bots, setBots] = useState<Array<BotModel>>([]);
  useEffect(() => {
    DashBoardServices.getBots().then((botList) => {
      console.log(botList.length);
      setBots(botList);
    });
  }, []);
  return (
    <Box bg={"blue.100"} height="100vh" width="100vw">
      <Box>
        <Grid
          p={12}
          alignItems={"center"}
          justifyContent="center"
          templateColumns={"1fr 1fr 1fr 1fr"}
          rowGap={"1rem"}
          columnGap="1rem"
        >
          {bots.map((bot, index) => (
            <GridItem key={index}>
              <BotCard {...bot} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const BotCard = (props: BotModel) => {
  return (
    <Box
      bg="blue.900"
      p={8}
      color={"blue.100"}
      display="flex"
      flexDirection={"column"}
      alignItems="flex-start"
      borderRadius={"xl"}
      fontWeight="bold"
      rowGap={"1rem"}
    >
      <Box>
        <Text>{props.createdOn.toString()}</Text>
        <Text>{props.exchange}</Text>
        <Text>{props.market}</Text>
        <Text>{props.name}</Text>
        <Text>{props.pricePerMonth}</Text>
        <Text>{props.status}</Text>
      </Box>
      <Box>
        <CustomButton title="Subscribe" onClick={() => {}} size="md" />
      </Box>
    </Box>
  );
};

export default DashBoard;
