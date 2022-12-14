import {
  Box,
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
import DashboardLayout from "./DashboardLayout";
import { BotModel, DashBoardServices } from "./DashboardServices";

const DashBoard = () => {
  const headers = [
    "Bot Name",
    "Subscription Method",
    "Status",
    "Coin",
    "Exchange",
  ];

  const [bots, setBots] = useState<Array<BotModel>>([]);

  useEffect(() => {
    DashBoardServices.getSubscribedbots().then((res: any) => {
      setBots(res);
    });
  }, []);

  return (
    <Box width={"100vw"} bg={"blue.100"}>
      <Text textAlign={"center"} fontSize="3xl" fontWeight={"bold"} p={4}>
        Subscribed bots
      </Text>

      <TableContainer
        p={3}
        borderRadius={"xl"}
        bg={"blue.100"}
        aria-expanded="false"
      >
        <Table fontWeight="bold" color={"blue.900"} variant="simple">
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
                    <Text>{d.market}</Text>
                  </Td>
                  <Td>
                    {d.status ? (
                      <AiOutlineCheckCircle color="green" />
                    ) : (
                      <AiOutlineClose color="red" />
                    )}
                  </Td>
                  <Td>
                    <Text>{d.coin}</Text>
                  </Td>
                  <Td>
                    <Text>{d.exchange}</Text>
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

const DashBoardLay = () => {
  return (
    <DashboardLayout>
      <DashBoard></DashBoard>
    </DashboardLayout>
  );
};

export default DashBoardLay;
