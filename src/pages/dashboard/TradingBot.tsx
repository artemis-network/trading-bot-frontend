import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import {
  BotModel,
  DashBoardServices,
  Exchange,
  Market,
} from "./DashboardServices";
import DashboardLayout from "./DashboardLayout";
import ModalWrapper from "./modal/ModalWrapper";
import SubscribeModal from "./modal/SubscribeModel";

const TradingBot = () => {
  const [bots, setBots] = useState<Array<BotModel>>([]);
  const headers = [
    "Bot",
    "status",
    "market",
    "price/month",
    "coin",
    "exhange",
    "options",
  ];
  const [open, setOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState<BotModel>({
    _id: "",
    coin: "",
    createdOn: new Date(),
    exchange: Exchange.BINANCE,
    market: Market.SPOT,
    name: "",
    pricePerMonth: 0,
    status: false,
  });

  const selectBot = (index: number) => {
    const bot = bots[index];
    setSelectedBot(bot);
    setOpen(true);
  };

  useEffect(() => {
    DashBoardServices.getBots().then((botList) => {
      setBots(botList);
    });
  }, []);
  return (
    <Box bg={"blue.100"} height="100vh" width="100vw">
      <ModalWrapper
        children={<SubscribeModal {...selectedBot} />}
        isOpen={open}
        size="md"
        close={() => setOpen(!open)}
      />
      <TableContainer
        p={3}
        borderRadius={"xl"}
        bg={"blue.100"}
        aria-expanded="false"
      >
        <Table
          fontFamily={"quicksand"}
          fontWeight="bold"
          color={"blue.900"}
          variant="simple"
        >
          <Thead>
            <Tr
              borderBottom="none"
              borderLeft="none"
              borderRight={"none"}
              borderTop="none"
            >
              {headers.map((h, i) => (
                <Th key={i} color={"blue.900"} fontSize={"md"}>
                  {h}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {bots.map((d: BotModel, i: number) => {
              return (
                <Tr
                  key={i}
                  borderBottom={`2px solid blue`}
                  borderLeft="none"
                  borderRight={"none"}
                  borderTop="none"
                  position={"relative"}
                >
                  <Td>
                    <Text>{d.name}</Text>
                  </Td>
                  <Td>
                    {d.status ? (
                      <AiOutlineCheckCircle color="green" />
                    ) : (
                      <AiOutlineClose color="red" />
                    )}
                  </Td>

                  <Td>
                    <Text>{d.market}</Text>
                  </Td>
                  <Td>
                    <Text>{d.pricePerMonth}</Text>
                  </Td>

                  <Td>
                    <Text>{d.coin}</Text>
                  </Td>
                  <Td>
                    <Text>{d.exchange}</Text>
                  </Td>
                  <Td>
                    <Button
                      onClick={() => selectBot(i)}
                      size="sm"
                      variant={"outline"}
                      bg="blue.100"
                    >
                      Buy
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const TradingBotLayout = () => {
  return (
    <DashboardLayout>
      <TradingBot></TradingBot>
    </DashboardLayout>
  );
};

export default TradingBotLayout;
