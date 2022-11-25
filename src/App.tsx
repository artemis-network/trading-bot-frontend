import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "./config/theme.config";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Pricing from "./pages/pricing/Pricing";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Siginin";
import TradingBot from "./pages/dashboard/TradingBot";
import DashBoard from "./pages/dashboard/DashBoard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/trading-bots" element={<TradingBot />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Box>
  </ChakraProvider>
);
