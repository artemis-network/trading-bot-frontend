import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./config/theme.config";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Pricing from "./pages/pricing/Pricing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Box>
  </ChakraProvider>
);
